var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('Create_by_Node.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/*

Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
*/