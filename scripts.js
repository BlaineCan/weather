<<<<<<< HEAD
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
=======

function showPosition(latitude, longitude){
    //console.log(latitude, longitude);
    let geolookup = 'https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/geolookup/q/'+ latitude +','+ longitude +'.json';
    fetch(geolookup).then((response)=>{
      if(response.status !== 200){
        console.log(response.status);
        return;
      }
      //console.log(geolookup);
      response.json().then((data)=>{
        getConditions(data);
      })
    })
}

function getConditions(data){
  //console.log(data)
  let state = data.location.state;
  let city = data.location.city;
  let conditions = 'https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/conditions/q/'+ state +'/'+ city +'.json';
  fetch(conditions).then((response)=>{
    if(response.status !== 200){
      console.log(response.status);
      return;
>>>>>>> 95ed16808273ff6060ca1d1179ac51de6460143d
    }
    response.json().then((data)=>{
      //console.log(data);
      showConditions(data);
    })
  })
}

function showConditions(data){
  let location = document.querySelector('#location');
  let temperature = document.querySelector('#weather_current_temp');
  let description = document.querySelector('#description');
  let icon = document.querySelector('#icon');
  location.innerHTML = data.current_observation.display_location.city;
  temperature.innerHTML = Math.round(data.current_observation.temp_f);
  description.innerHTML = data.current_observation.weather;
  icon.setAttribute('src', data.current_observation.icon_url);
}

(function getCoords(){
  if(!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
<<<<<<< HEAD
  // this.getlocation = function(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //     this.showPosition();
  //   } else {
  //     console.log("Geolocation not supported");
  //   }
  // }
  this.showPosition = function(position){
    //console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
=======
  navigator.geolocation.getCurrentPosition((position)=>{
>>>>>>> 95ed16808273ff6060ca1d1179ac51de6460143d
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    showPosition(latitude, longitude);
    //console.log("latitude: " + latitude + " & " + "longitude: " + longitude);
  })
})();
