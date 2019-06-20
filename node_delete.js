/*
To delete a file with the File System module,  
use the fs.unlink() method.

The fs.unlink() method deletes the specified file:
*/

var fs = require('fs');

//Delete the file delete_me.txt:
fs.unlink('delete_me.txt', function (err) {
  if (err) throw err;
  console.log('File has been deleted!');
});

//notes

/*
Update Files
The File System module has methods 
for updating files:

fs.appendFile()
fs.writeFile()
The fs.appendFile() method appends the 
specified content at the end of the
 specified file:
*/