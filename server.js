// load the things we need
const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server is listening port on ' + PORT);
    console.log(`Open http://localhost:${PORT} and see the magic`);
});