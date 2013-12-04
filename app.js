var app = require('express')().set('view engine', 'jade');
app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from Jade'});
});
require('http').createServer(app).listen(3000);
