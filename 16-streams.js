const fs = require('fs');

// Create a read stream with encoding 'utf8' and highWaterMark of 200 bytes
const readStream = fs.createReadStream('../content/big.txt', {
  encoding: 'utf8',
  highWaterMark: 200
});

let counter = 0;

// Handle the 'data' event
readStream.on('data', (chunk) => {
  counter++;
  console.log(`Received chunk ${counter}: ${chunk}`);
});

// Handle the 'end' event
readStream.on('end', () => {
  console.log(`Stream ended. Total chunks received: ${counter}`);
});

// Handle the 'error' event
readStream.on('error', (err) => {
  console.error('Stream error:', err);
});
