var app = require('express')().set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from EJS'});
});
require('http').createServer(app).listen(3000);
