const key = require('./key');

module.exports = {
    searchQuery: ()=>{
        let state = 'texas';
        let city = 'dallas';
        let conditions = 'http://api.wunderground.com/api/'+ key +'/conditions/q/'+ state +'/'+ city +'.json';
        return conditions;  
    }
}

