const fs = require("fs");
const { text } = require("stream/consumers");
fs.writeFileSync("notes.txt", "My name is Sree Lakshmi. ");

// Challenge: Append a message to notes.txt

// 1. Use appendFileSync() to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text.

fs.appendFileSync("notes.txt", `I'm a front-end developer.`);
