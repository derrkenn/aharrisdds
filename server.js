const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();


//const api = require

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

// api location

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

  const port = process.env.PORT || '3000';
  const hostname = '127.0.0.1';
 
  app.set('hostname', hostname)
  app.set('port', port)

  const server = http.createServer(app);

  server.listen(port, hostname, () => console.log(`Running on local port ${port}`));
