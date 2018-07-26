(function weather(){
  this.init = function(){
    this.data();
  }
  this.data = function(){
    let url = 'https://fcc-weather-api.glitch.me/api/current?lat=53.70&lon=-1.24';
    fetch(url).then(
      function(response){
        if(response.status !== 200){
          console.log('Looks like there was a problem. Status code: ' + response.status);
          return;
        }
        response.json().then(function(data){
          console.log(data);
        });
      }
    )
  }
  this.init();
})();
