const app = require('express')();
const pug = require('pug');
const bodyParser = require('body-parser');
const scripts = require('./scripts');
//const routes = require('./routes');
const key = require('./key');

bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/', (req, res)=>{
    console.log(req.body)
})

app.get('/weather', (req,res)=>{
    res.render('weather')
})

//app.use('/', routes);

app.listen(8000)