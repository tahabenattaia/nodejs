const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); // Type MIME HTML
  res.write('<html>');
  res.write('<head><title>Ma première page HTML</title></head>');
  res.write('<body><h1>Bienvenue sur mon serveur Node.js</h1></body>');
  res.write('</html>');
  res.end(); // Fin de la réponse
});

server.listen(8081);
