import http from 'node:https';

// Create an HTTPS server
const server = https.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Make the server listen on port 8080
server.listen(8080, '127.0.0.1', () => {
  console.log('Server is running at https://127.0.0.1:8080/');
});