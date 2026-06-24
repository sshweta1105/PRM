// import standard modules
const fs = require('fs');
const path = require('path');

//use global object to get current directory
const currentDir = __dirname
const filePath = path.join(currentDir, 'app.json');

console.log('Current Directory:', currentDir);
console.log('File Path:', filePath);

function readJsonFile() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing JSON file:', err);
        return null;
    }
}

module.exports = {
    readJsonFile
};
