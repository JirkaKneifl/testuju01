var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
      fs.readFile('demoFile1.html', function(err , data){ //fs.readFile()Metoda se používá ke čtení souborů v počítači.
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });

      fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) { //fs.appendFile()Metoda připojí určený obsah souboru. Pokud soubor neexistuje, bude vytvořen:
        if (err) throw err;
        console.log('Saved!');
      });

      fs.open('mynewfile2.txt', 'w', function (err, file) { //fs.open()Metoda trvá „příznak“ jako druhý argument, pokud je příznak „w“ pro „psaní“, zadaný soubor je otevřen pro zápis. Pokud soubor neexistuje, vytvoří se prázdný soubor:
        if (err) throw err;
        console.log('Saved!');
      });

      fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) { //fs.writeFile()Metoda nahrazuje daném souboru a obsah, pokud existuje. Pokud soubor neexistuje, bude vytvořen nový soubor obsahující zadaný obsah:
        if (err) throw err;
        console.log('Saved!');
      });
}).listen(8080);

