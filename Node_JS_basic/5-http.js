const PORT = 1245;
const http = require('http');
const countStudents = require('./3-read_file_async');

const dbName = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(dbName)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(PORT);

module.exports = app;
