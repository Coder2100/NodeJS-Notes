//The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created:

var fs = require('fs');

//create a file created_by_write_File.txt:
fs.writeFile('write_File.txt', 'The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:,Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});