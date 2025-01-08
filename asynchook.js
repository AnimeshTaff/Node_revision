const async_hooks = require('async_hooks');
const fs = require('fs');

// Create a new async hook instance
const asyncHook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        fs.writeSync(1, `Init: asyncId=${asyncId}, type=${type}, triggerAsyncId=${triggerAsyncId}\n`);
    },
    before(asyncId) {
        fs.writeSync(1, `Before: asyncId=${asyncId}\n`);
    },
    after(asyncId) {
        fs.writeSync(1, `After: asyncId=${asyncId}\n`);
    },
    destroy(asyncId) {
        fs.writeSync(1, `Destroy: asyncId=${asyncId}\n`);
    },
    promiseResolve(asyncId) {
        fs.writeSync(1, `PromiseResolve: asyncId=${asyncId}\n`);
    }
});

// Enable the async hook
asyncHook.enable();

// Example async function
async function example() {
    await new Promise(resolve => setTimeout(resolve, 100));
}

// Run the example function
example().then(() => {
    // Disable the async hook after the example function completes
    asyncHook.disable();
});