const app = require('express')();
const pug = require('pug');
const scripts = require('./scripts');
//const routes = require('./routes');
const key = require('./key');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index', scripts.home)
})

//app.use('/', routes);

app.listen(8000)