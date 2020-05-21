// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


app.listen(8080);
console.log('open http://localhost:8080 and see the magic');