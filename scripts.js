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
    this.showPosition();
  }
  this.getlocation = function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation not supported");
    }
  }
  this.showPosition = function(position){
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let key = 'aed684636d700ce7';
    let url = 'http://api.wunderground.com/api/'+ key +'/geolookup/q/'+ latitude +','+ longitude +'.json';
    fetch(url).then(
      function (response) {
        if(response.status !== 200){
          console.log('Looks like there was a problem. Status code: ' + response.status);
          return;
        }
        response.json().then(
          function(data){
            console.log(data)
          }
        )
      }
    )
  }
  // this.fetchlocation = function(position){
  //   let state = position.location.state;
  //   let city = position.location.city;
  //   let key = '';
  //   let url = 'http://api.wunderground.com/api/'+ key +'/conditions/q/'+ state +'/'+ city +'.json';
  // }
  this.init();
})();
