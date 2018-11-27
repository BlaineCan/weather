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
    let url = scripts.searchQuery();
    request(url, (error, response, body)=>{
        console.log('error:', error)
        console.log('Status Code: ', response)
        console.log('body: ', body)
    })
})

app.listen(8000)