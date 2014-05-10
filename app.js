
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

// var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/papers');

var app = express();

app.use(function(req,res,next){
    req.db = db;
    next();
});

var user = require('./routes/user')
  , papers = require('./routes/papers')
  , http = require('http')
  , path = require('path');


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/papers', papers.list);
app.get('/papers/analyze', papers.analyze);
app.get('/papers/import', papers.import);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
