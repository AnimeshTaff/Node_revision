const url = require('url');

const myUrl = new URL('https://example.com:8000/pathname/?search=test#hash');

console.log(myUrl.href); // 'https://example.com:8000/pathname/?search=test#hash'
console.log(myUrl.origin); // 'https://example.com:8000'
console.log(myUrl.protocol); // 'https:'
console.log(myUrl.host); // 'example.com:8000'
console.log(myUrl.hostname); // 'example.com'
console.log(myUrl.port); // '8000'
console.log(myUrl.pathname); // '/pathname/'
console.log(myUrl.search); // '?search=test'
console.log(myUrl.hash); // '#hash'