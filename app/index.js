const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pug = require('pug');
const scripts = require('./scripts');
const key = require('./key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/', (req, res)=>{
    res.render('index')
    console.log(req.body.city)
})

app.listen(8000)