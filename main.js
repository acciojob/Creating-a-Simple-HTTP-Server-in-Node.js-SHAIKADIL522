const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }