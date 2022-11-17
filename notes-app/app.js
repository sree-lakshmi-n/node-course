// const fs = require("fs");
// const { text } = require("stream/consumers");
// fs.writeFileSync("notes.txt", "My name is Sree Lakshmi. ");

//////////////////////////////
// // Challenge: Append a message to notes.txt

// // 1. Use appendFileSync() to append to the file
// // 2. Run the script
// // 3. Check your work by opening the file and viewing the appended text.
//////////////////////////////

// fs.appendFileSync("notes.txt", `I'm a front-end developer.`);

// const name = require("./utils");
// console.log(name);

// const add = require("./utils");
// const sum = add(2, 3);
// console.log(sum);

//////////////////////////////
// Challenge: Define and use a function in a new file

// 1. Create a new file called notes.js
// 2. Create getNotes function that returns 'Your notes...'
// 3. Export getNotes function
// 4.From app.js, load in and call the function printing message to console.
//////////////////////////////

const notes = require("./notes");
console.log(notes());

const validator = require("validator");
console.log(validator.isEmail("abc@example.com"));
console.log(validator.isEmail("example.com"));
console.log(validator.isURL("https://neil.io"));
console.log(validator.isURL("https:/neil.io"));
