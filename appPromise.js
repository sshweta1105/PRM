const taskmanager = require('./taskmanagerPromise');
// using promise to read the JSON file
taskmanager.readJsonFile()
    .then(jsonData => {
        console.log('File data:');
        console.log(jsonData);
    } )
    .catch(err => {
        console.error('Error:', err);
    });

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