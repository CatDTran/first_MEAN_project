process.env.NODE_ENV = 'development';

var express = require('./config/express.js')

var app = express();
app.listen(3000);
module.exports = app;
console.log('Sever running at http://localhost:3000/');
