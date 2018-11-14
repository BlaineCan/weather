const app = require('express')();
const scripts = require('./scripts');
const routes = require('./routes');
const key = require('./key');

app.use('/', routes);

app.listen(8000)