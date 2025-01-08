const fs = require('fs');

// Function to read a file
function readFileCallback(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

// Function to write to a file
function writeFileCallback(filePath, data, callback) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

// Example usage
const filePath = './example.txt';
const dataToWrite = 'Hello, world!';

writeFileCallback(filePath, dataToWrite, (err) => {
    if (err) {
        return console.error('Error writing file:', err);
    }
    console.log('File written successfully');

    readFileCallback(filePath, (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log('File content:', data);
    });
});