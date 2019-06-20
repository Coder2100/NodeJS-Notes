//Node.js is perfect for event-driven applications


/*

Every action on a computer is an event.
 Like when a connection is made or a file is opened.

Objects in Node.js can fire events, 
like the readStream object fires events when opening and closing a file:
*/
var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
});