(function weather(){
  this.init = function(){
    this.getlocation();
  }
  this.getlocation = function(){
    if(!navigator.geolocation){
      console.log('Geolocation not supported.');
      return
    } else {
      navigator.geolocation.getCurrentPosition(showPosition);
      this.showPosition();
    }
  }
  this.showPosition = function(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let key = 'aed684636d700ce7';
    let lookupRequest = fetch('https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/geolookup/q/'+ latitude +','+ longitude +'.json').then(function(response){
      return response.json()
    });
    let conditionsRequest = fetch()
    // let geolookup = 'https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/geolookup/q/'+ latitude +','+ longitude +'.json';
    fetch(geolookup).then(
      function (response) {
        if(response.status !== 200){
          console.log('Looks like there was a problem. Status code: ' + response.status);
          return;
        }
        response.json().then(
          function(data){
            let state = data.location.state;
            let city = data.location.city;
            let conditions = 'https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/conditions/q/'+ state +'/'+ city +'.json';
            fetch(conditions).then(
              function(response){
                if(response.status !== 200){
                  console.log('Looks like there was a problem. Status code: '+ response.status);
                  return;
                }
                response.json().then(
                  function(data){
                    let location = document.querySelector('#location');
                    let temperature = document.querySelector('#weather_current_temp');
                    let description = document.querySelector('#description');
                    let icon = document.querySelector('#icon');
                    location.innerHTML = data.current_observation.display_location.city;
                    temperature.innerHTML = Math.round(data.current_observation.temp_f);
                    description.innerHTML = data.current_observation.weather;
                    icon.setAttribute('src', data.current_observation.icon_url);
                  }
                )
              }
            )
          }
        )
      }
    )
  }
  this.init();
})();
