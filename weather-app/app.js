const request = require('request');

request({
  url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDY2MZYRXikZv-x6LjjBInYqcRuwcLHB8A&address=1301%20lombard%20street%20philadelphia",
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(body, undefined, 2)); // 2 - spaces for indentation
  console.log(`Latitude: ${JSON.stringify(body.results[0].geometry.location.lat)}`);
  console.log(`Latitude: ${JSON.stringify(body.results[0].geometry.location.lng)}`);
});
