const request = require("request");
const fs = require('fs');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  var readFile = fs.readFileSync("./config.json");
  var mapsAPIKey = JSON.parse(readFile).MAPS_API_KEY;

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${mapsAPIKey}&address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to Google servers.");
    }
    else if (body.status === "ZERO_RESULTS") {
      callback("Unable to find that address.");
    }
    else if (body.status === "OK") {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: JSON.stringify(body.results[0].geometry.location.lat),
        longitude: JSON.stringify(body.results[0].geometry.location.lng)
      })
    }
    //console.log(JSON.stringify(body, undefined, 2)); // 2 - spaces for indentation
  });
};

module.exports.geocodeAddress = geocodeAddress;
