if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetch(`http://api.wunderground.com/api/****apikey*****/geolookup/conditions/q/${lat},${long}.json`).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);
        })
    })
}