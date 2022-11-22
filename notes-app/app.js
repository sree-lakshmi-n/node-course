const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customise yargs version
yargs.version("1.1.0");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding new note");
  },
});
console.log(yargs.argv);
