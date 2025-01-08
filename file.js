const fs = require('fs');

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// // Writing to a file asynchronously
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully');
// });

// // Appending to a file asynchronously
// fs.appendFile('example.txt', '\nAppended text', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }
//     console.log('File appended successfully');
// });

// // Deleting a file asynchronously
// fs.unlink('example.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully');
// });