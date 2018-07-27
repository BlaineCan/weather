(function weather(){
  this.init = function(){
    this.data();
    this.search();
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
  this.search = function () {
    let button = document.querySelector('#submit-button');
    button.addEventListener('click', function () {
      let form = document.querySelector('.form');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        let value = document.querySelector('#input-search').value;
        form.reset();
        console.log(value);
      })
    })
  }
  this.init();
})();
