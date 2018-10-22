const request = require('request');
const yargs = require('yargs');
const fs = require('fs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
    })
  .help()
  .alias("help", "h")
  .argv;

console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);
var readFile = fs.readFileSync("config.json");
var mapsAPIKey = JSON.parse(readFile).MAPS_API_KEY;

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=${mapsAPIKey}&address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(body, undefined, 2)); // 2 - spaces for indentation
  console.log(`Address: ${JSON.stringify(body.results[0].formatted_address)}`);
  console.log(`Latitude: ${JSON.stringify(body.results[0].geometry.location.lat)}`);
  console.log(`Latitude: ${JSON.stringify(body.results[0].geometry.location.lng)}`);
});
