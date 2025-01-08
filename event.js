const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Event listener for 'waterFull' event
eventEmitter.on('waterFull', () => {
    console.log('Water is full.');
    setTimeout(() => {
        console.log('Please turn off the motor.');
    }, 3000);
});

// Trigger the 'waterFull' event
eventEmitter.emit('waterFull');