const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Page d\'accueil</h1>');
  } else if (pathname === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Page de contact</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found!</h1>');
  }

  res.end();
});

server.listen(8083);
