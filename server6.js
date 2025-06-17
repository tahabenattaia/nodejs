const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (pathname === '/mapage') {
    const id = query.id;
    const login = query.login;

    res.write(`<h1>Bienvenue ${login}</h1>`);
    res.write(`<p>Votre ID est : ${id}</p>`);
  } else {
    res.write('<h1>Page non reconnue</h1>');
  }

  res.end();
});

server.listen(8085);
