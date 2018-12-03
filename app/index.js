const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pug = require('pug');
const key = require('./key');
const request = require('request');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/fetching-data', (req, res)=>{
    let query = req.body.city;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=imperial&appid=' + key;
    request(url, (error, response, body)=>{
        if(!error || response == 200){
            let weather = JSON.parse(body)
            console.log(weather)
            res.render('fetching')
        } else {
            res.render('error')
        }
    })
})

app.listen(8000)