newFunction();
function newFunction() {
  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.end('Hello, World!');
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });

  server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
  });
}

