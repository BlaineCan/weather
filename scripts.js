
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
  navigator.geolocation.getCurrentPosition((position)=>{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    showPosition(latitude, longitude);
    //console.log("latitude: " + latitude + " & " + "longitude: " + longitude);
  })
})();
