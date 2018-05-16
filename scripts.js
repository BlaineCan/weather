if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetch(`http://api.wunderground.com/api/aed684636d700ce7/geolookup/conditions/q/${lat},${long}.json`).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);
        })
    })
}