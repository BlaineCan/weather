(function weather(){
  this.init = function(){
    this.getLocation();
    this.sendLocation();
  }
  this.sendLocation = function(){
    let button = document.querySelector('#submit-button');
    button.addEventListener('click', getLocation());
  }
  this.getLocation = function(){
      let form = document.querySelector('.form');
      form.addEventListener('submit', function(evt){
        event.preventDefault();
        let value = document.querySelector('#input-search').value;
        form.reset();
        getData(value);
        console.log(value);
      })
  }
  this.getData = function(loc){
    let http = new XMLHttpRequest();
    let url = ' http://autocomplete.wunderground.com/aq?query=' + loc;
    let method = 'GET';
    console.log(url);
    http.open(method, url);
    http.onreadystatechange = function(){
      if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
        console.log(JSON.parse(http.response));
      }
    }
  }
  this.init();
})();
