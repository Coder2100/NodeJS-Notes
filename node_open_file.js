// declare gloabl var
var fs = require('fs');
// this create a new empty file
fs.open('node_to_read.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('File has been Opened!');
});

/*
The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
*/