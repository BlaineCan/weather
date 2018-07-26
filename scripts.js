let conditions = [
  {loc: 'New York', temp: 75, high: 77, low: 62}
];

(function weather(conditions){
  this.init = function(){
    this.getWeather();
  };
  this.update = function(conditions){
    temp.innerHTML = conditions[0].temp;
    location.innerHTML = conditions[0].loc;
    high.innerHTML = conditions[0].high;
    low.innerHTML = conditions[0].low;
  }

  this.getWeather = function(){
    temp = document.querySelector('#weather_current_temp');
    loc = document.querySelector('#current_location');
    high = document.querySelector('#weather_high_temp');
    low = document.querySelector('#weather_low_temp');
    update(conditions);
  }
})();
