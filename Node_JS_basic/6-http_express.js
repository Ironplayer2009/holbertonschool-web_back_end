const PORT = 1245;
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(PORT);

module.exports = app;
