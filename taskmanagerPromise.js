const fs = require('fs');
const path = require('path');

const currentDir = __dirname;
const filePath = path.join(currentDir, 'app.json');

function readJsonFile() {
            return new Promise((resolve, reject) => {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        reject('Error reading JSON file:' + err.message);
                    } else {
                        try {
                            const jsonData = JSON.parse(data);
                            resolve(jsonData);
                        } catch (parseErr) {
                            reject('Error parsing JSON file:' + parseErr.message);
                        }
                    }
                });
            });
        }

module.exports = {
    readJsonFile
};