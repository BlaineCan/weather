const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pug = require('pug');
const scripts = require('./scripts');
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
    let url = 'api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + key;
    request(url, (error, response, body)=>{
        console.log(body)
        res.render('index')
    })
})

app.listen(8000)