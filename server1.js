const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200); // Code HTTP OK
  res.end('Salut les webistes');
});

server.listen(8080);
