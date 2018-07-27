(function weather(){
  this.init = function(){
    this.data();
  }
  this.data = function(){
    let key = //Your api key goes here;
    let url = 'http://api.wunderground.com/api/'+ key +'/conditions/q/TX/Dallas.json';
    fetch(url).then(
      function(response){
        if(response.status !== 200){
          console.log('Looks like there was a problem. Status code: ' + response.status);
          return;
        }
        response.json().then(
          function(data){
            console.log(data);
            let location = document.querySelector('#location');
            let temperature = document.querySelector('#weather_current_temp');
            let description = document.querySelector('#description');
            location.innerHTML = data.current_observation.display_location.city;
            temperature.innerHTML = Math.round(data.current_observation.temp_f);
            description.innerHTML = data.current_observation.weather;
        });
      }
    )
  }
  this.init();
})();
