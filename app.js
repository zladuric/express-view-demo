var app = require('express')().set('view engine', 'ejs');
var options = {
    title: 'Hello world'
    , name: 'Hello Javascript meetup'
}
app.get('/', function(req, res) {
    res.render('index', {title: options.title});
});
require('http').createServer(app).listen(3000);
