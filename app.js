var app = require('express')().set('view engine', 'jade');
app.locals.pretty = true;
app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from Jade'});
});
require('http').createServer(app).listen(3000);
