var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8000);

//http://localhost:8000/winter

// output: /winter

//http://localhost:8000/Zukile

//output: /Zukile