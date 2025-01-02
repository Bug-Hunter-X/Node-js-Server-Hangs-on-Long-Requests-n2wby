const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation asynchronously
  const start = Date.now();
  setTimeout(() => {
    if (Date.now() - start < 5000) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    } else {
      res.writeHead(408, { 'Content-Type': 'text/plain' });
      res.end('Request timed out');
    }
  }, 5000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});