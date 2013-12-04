var app = require('express')().set('views', __dirname + '/views').set('view engine', 'hbs')
    , hbs = require('hbs')
    ;
hbs.registerPartial('part', require('fs').readFileSync('views/partial.hbs', 'utf-8'));
app.get('/', function(req, res) {
    res.render('index', {title: 'Would you stop it with saluting?'});
});
require('http').createServer(app).listen(3000);
