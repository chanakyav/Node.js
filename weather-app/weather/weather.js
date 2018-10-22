const fs = require('fs');
const request = require('request');

var readFile = fs.readFileSync("./config.json");
var forecastAPIKey = JSON.parse(readFile).FORECAST_API_KEY;

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${forecastAPIKey}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to forecast.io.");
    }
    else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback("Unable to fetch weather.")
    }
  });
};

module.exports.getWeather = getWeather;
