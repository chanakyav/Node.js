console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");

var filteredArray = _.uniq([1,1,2,4,4,"Nick", "Nick"]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("Nick"));

// var result = notes.addNote();
// console.log(result);

// var user = os.userInfo();
//
// fs.appendFileSync("greeting.txt", `Hello ${user.username}!`);
