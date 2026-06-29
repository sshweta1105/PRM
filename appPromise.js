const dayjs = require('dayjs');
const taskmanager = require('./taskmanagerPromise');

// using async/await to read the JSON file

    async function getUser() {
        try {
            const jsonData = await taskmanager.readJsonFile();
            console.log('File data (from async/await):');
            console.log(jsonData);
        } catch (err) {
            console.error('Error (from async/await):', err);
        }
    }


// using promise to read the JSON file
taskmanager.readJsonFile()
    .then(jsonData => {
        console.log('File data:');
        console.log(jsonData);
    } )
    .catch(err => {
        console.error('Error:', err);
    });

 getUser();

    taskmanager.readJsonFile1()
    .then(message => {
        console.log('Message from readJsonFile1:');
        console.log(message);
    })
    .catch(err => {
        console.error('Error:', err);
    });



   


    console.log('Reading JSON file...');
    console.log('This message will be logged before the file data is printed, demonstrating asynchronous behavior.');