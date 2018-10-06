
function showPosition(latitude, longitude){
    //console.log(latitude, longitude);
    let geolookup = 'https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/'+ key +'/geolookup/q/'+ latitude +','+ longitude +'.json';
    fetch(geolookup).then((response)=>{
      if(response.status !== 200){
        console.log(response.status);
        return;
      }
      console.log(geolookup);
    })
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
