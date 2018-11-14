const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mustache = require("mustache");
const mustacheExpress = require("mustache-express");
const key = require('./key');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('/public'))
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', (req,res)=>{
  res.render('index')
})

app.post('/', (req,res)=>{
  let template = '';
  let city;
  let search = req.body.search;
  let query = 'http://autocomplete.wunderground.com/aq?query=' + search;
  request(query, (err, response, body)=>{
    let j = JSON.parse(body);
    j.RESULTS.forEach((cities)=>{
      city += cities.name;
      template += city;
    })
    console.log(city)
    res.render('index', {
      template:template,
      city:city
    })
  })
})

app.listen(port, ()=>{
  console.log("Listening on Port: " + port)
})
