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
    request(url, (error, response, body)=>{
        if(!error){
            let weather = JSON.parse(body)
            let name = weather.name;
            let mainTemp = Math.round(weather.main.temp);
            let weatherDescription = weather.weather[0].description;
            res.render('results',{name: name, mainTemp: mainTemp, weatherDescription: weatherDescription})
        } else{
            res.render('error')
        }
    })
})

app.listen(process.env.port || 8000, ()=>{
    console.log('Serving on PORT:8000. Please visit localhost:8000.')
})