var app = require('express')().set('views', __dirname + '/views').set('view engine', 'jade')
    ;
app.locals.pretty = true;
app.get('/', function(req, res) {
    res.render('index', {title: 'So let\'s look at jade.'});
});
require('http').createServer(app).listen(3000);
