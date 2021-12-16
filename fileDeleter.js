var http = require('http');
var fs = require('fs');

fs.unlink('mynewfile1.txt', 'mynewfile2.txt', 'mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});