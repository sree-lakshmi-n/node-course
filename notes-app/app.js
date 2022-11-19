const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

console.log(process.argv);
/*
Without arguments
 [
  '/usr/local/bin/node',
  '/Users/sree-zt428/Documents/Repo/Programming/udemy/node-course/notes-app/app.js'

  With arguments
  [
  '/usr/local/bin/node',
  '/Users/sree-zt428/Documents/Repo/Programming/udemy/node-course/notes-app/app.js',
  'Andrew',
  '--title=First name'
]
]*/

console.log(yargs.argv);
// Without arguments
// { _: [], '$0': 'app.js' }

// With arguments
// { _: [ 'Andrew' ], title: 'First name', '$0': 'app.js' }

/*
node app.js --help
Displays helpful info about what's going on with our app.
This is coming from yargs.
*/
/*
node app.js --version 
shows version number
*/
/*
To customise yargs version
yargs.version("1.0.0");
*/
