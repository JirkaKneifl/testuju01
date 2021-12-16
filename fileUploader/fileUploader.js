var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var staraCesta = files.filetoupload.filepath;
          var novaCesta = 'C:/xampp/htdocs/testuju01/fileUploader/'+ files.filetoupload.originalFilename;;
          fs.rename(staraCesta, novaCesta, function(err){
              if(err) throw err;
          });
          res.write('File uploaded');
          res.end();
        });
      } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
      }
  }).listen(8080);