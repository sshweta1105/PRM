//console.log("Welcome to CAP Training");
//console.log("adding line 1.");

const taskmanager = require('./taskmanager');
const fileData = taskmanager.readJsonFile();

console.log('File data');
console.log(fileData);