const key = require('./key');
const bodyParser = require('body-parser');

module.exports = {
    searchQuery: ()=>{
        let search = document.querySelector('.search').value;
        let url = 'http://autocomplete.wunderground.com/aq?query=query' + search;
        console.log(url);
    }
}

