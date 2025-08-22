let http = require('http');
let math = require('./Common.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let result=math.subtract(5,6);
  res.end(result.toString());
}).listen(8000);
  
  

              