const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Analyse de l'URL
  const pathname = parsedUrl.pathname;        // Chemin appelé

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Bien on avance</h1>');
  res.write('<h1>'+pathname+'</h1>');
  res.end();
  
});

server.listen(8082);
