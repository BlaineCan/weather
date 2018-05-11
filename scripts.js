//use the weather underground api key

fetch('http://api.wunderground.com/api/*api key goes here*/conditions/q/TX/Dallas.json').then(content);

let

function content(response) {
    let data = response.json().then(function (data) {
        console.log(data);
    })

}