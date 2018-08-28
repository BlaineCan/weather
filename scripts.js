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
  }
  this.fetchdata = function(){
    let url = "" 
  }
  this.init();
})();
