const PORT = 1245;
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const dbName = process.argv[2];

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(dbName)
    .then((result) => {
      response.status(200).send(`This is the list of our students\n${result}`);
    })
    .catch(() => {
      response.status(500).send('This is the list of our students\nCannot load the database');
    });
});

app.listen(PORT);

module.exports = app;
