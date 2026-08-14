const PORT = 1245;
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.listen(PORT, 'localhost', () => {
  console.log(`Server is executed at the loclhost:${PORT}`);
});

module.exports = app;