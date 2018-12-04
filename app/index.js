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

app.post('/', (req, res)=>{
    let query = req.body.city;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=imperial&appid=' + key;
    console.log(url)
    request(url, (err, response, body)=>{
        if(err){
            res.render('error')
        } else {
            let weather = JSON.parse(body)
            console.log(weather)
        }
    })
    res.render('index')
})

app.listen(8000, ()=>{
    console.log('Serving on PORT:8000. Please visit localhost:8000')
})