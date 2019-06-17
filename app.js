//install express server
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || '8082';
app.set('port', port);

//serve only the static files form the dist directory
app.use(express.static(path.join(__dirname + '/dist')));
app.use(express.static(path.join(__dirname + '/dist/angular-crud-app')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/dist/angular-crud-app/index.html'));
});

const server = http.createServer(app);
server.listen(port, console.log('running in port 8080'));