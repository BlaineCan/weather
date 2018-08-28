// (function weather(){
//   this.init = function(){
//     this.sendLocation();
//   }
//   this.sendLocation = function(){
//     let button = document.querySelector('#submit-button');
//     button.addEventListener('click', getLocation());
//   }
//   this.getLocation = function(){
//       let form = document.querySelector('.form');
//       form.addEventListener('submit', function(event){
//         event.preventDefault();
//         let value = document.querySelector('#input-search').value;
//         form.reset();
//         getData(value.split(' ').join('+'));
//       })
//   }
//   this.getData = function(loc){
//     let url = ' http://autocomplete.wunderground.com/aq?query=' + loc;
//     fetch(url, {mode: 'cors'}).then(
//       function (response) {
//         console.log(response[0].name);
//       }
//     )
//   }
//   this.init();
// })();

(function weather(){
  this.init = function(){
    this.getlocation();
    this.fetchlocation();
  }
  this.getlocation = function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
      this.showPosition();
    } else {
      console.log("Geolocation not supported");
    }
  }
  this.showPosition = function(position){
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let key = 'aed684636d700ce7';
    let geolookup = 'http://api.wunderground.com/api/'+ key +'/geolookup/q/'+ latitude +','+ longitude +'.json';
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
            let conditions = 'http://api.wunderground.com/api/'+ key +'/conditions/q/'+ state +'/'+ city +'.json';
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
                    location.innerHTML = data.current_observation.display_location.city;
                    temperature.innerHTML = Math.round(data.current_observation.temp_f);
                    description.innerHTML = data.current_observation.weather;
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
