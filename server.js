//install express server
const express = require('expresss');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

//serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-crud-app'));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/dist/angular-crud-app/index.html'));
});

app.listen(port, console.log('running in port 8080'));