const key = require('./key');

module.exports = {
    searchQuery: ()=>{
        let state = 'texas';
        let city = 'dallas';
        let conditions = 'https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/conditions/q/'+ state +'/'+ city +'.json';
        console.log(conditions);  
    }
}

