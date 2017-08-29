'use strict';

const express = require('express'),
  PORT = 8080,
  HOST = '0.0.0.0',
  app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);