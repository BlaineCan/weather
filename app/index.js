const express = require('express');
const scripts = require('./scripts');
const key = require('./key');
const app = express();

app.get('/', (req, res)=>{
    scripts.searchQuery();
});

app.listen(8000)