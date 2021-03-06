
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var contestController = require('./controllers/contest.js')

//============================== config ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//============================== routing ==============================//
        
app.get('/', indexController.index);

app.post('/submit', indexController.submit);

app.get('/subsFull', indexController.subsFull);

app.get('/submissions', indexController.viewSubs);

app.post('/vote/:slug', indexController.vote);

app.get('/need-more-contestants', contestController.notEnough)

app.get('/fight', contestController.contest)

app.post('/fight-winner', contestController.winner)

app.get('/reset', contestController.reset)
//============================== server ==============================//
        
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
