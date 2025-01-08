const fs = require('fs').promises; // Using fs.promises for Promises-based example

// Callback Function Example
function readFileWithCallback(filePath, callback) {
  const fs = require('fs'); // Regular fs module for callback-based API
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err); // Handle error in callback
    }
    callback(null, data); // Pass the data to the callback
  });
}

// Promise Example
function readFileWithPromise(filePath) {
  return fs.readFile(filePath, 'utf8'); // Returns a promise
}

// Demonstrating Callbacks
readFileWithCallback('./example.txt', (err, data) => {
  if (err) {
    console.error('Callback Error:', err);
  } else {
    console.log('Callback Result:', data);
  }
});

// Demonstrating Promises
readFileWithPromise('./example.txt')
  .then((data) => {
    console.log('Promise Result:', data);
  })
  .catch((err) => {
    console.error('Promise Error:', err);
  });

// Using Async/Await with Promises
async function readFileWithAsyncAwait(filePath) {
  try {
    const data = await readFileWithPromise(filePath);
    console.log('Async/Await Result:', data);
  } catch (err) {
    console.error('Async/Await Error:', err);
  }
}

// Call the async function
readFileWithAsyncAwait('./example.txt');
