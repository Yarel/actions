const express = require('express');
const app = express();
const path = require('path');


//settings
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/'));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));

});