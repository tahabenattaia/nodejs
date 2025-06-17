const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  const id = query.id;
  const login = query.login;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>ID: ${id}</h1>`);
  res.write(`<h1>Login: ${login}</h1>`);
  res.end();
});

server.listen(8084);
