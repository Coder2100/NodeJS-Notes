/*
Rename Files
To rename a file with the File System module, 
 use the fs.rename() method.

The fs.rename() method renames
 the specified file:
*/


var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('node_name.txt', 'Renamed_by_node.txt', function (err) {
  if (err) throw err;
  console.log('File has been successfully renamed!');
});
