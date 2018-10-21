console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

var result = notes.addNote();
console.log(result);

// var user = os.userInfo();
//
// fs.appendFileSync("greeting.txt", `Hello ${user.username}!`);
