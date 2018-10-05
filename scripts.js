(function getCoords(){
  if(!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  navigator.geolocation.getCurrentPosition((position)=>{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getLocation(latitude, longitude);
    //console.log("latitude: " + latitude + " & " + "longitude: " + longitude);
  })
})();

function getLocation(latitude, longitude){
    console.log(latitude, longitude);
}
