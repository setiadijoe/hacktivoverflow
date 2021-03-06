var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

// var index = require('./routes/index');
var users = require('./routes/users');
var questions = require('./routes/questions');
var answers = require('./routes/answers')

var db = 'mongodb://nahtanoy:123@hacktivoverflow-shard-00-00-fjtwn.mongodb.net:27017,hacktivoverflow-shard-00-01-fjtwn.mongodb.net:27017,hacktivoverflow-shard-00-02-fjtwn.mongodb.net:27017/test?ssl=true&replicaSet=hacktivoverflow-shard-0&authSource=admin'
mongoose.connection.openUri(db , (err) => {
  if (err) {
    console.log('database unconnect');
  } else {
    console.log('database connect');
  }
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// app.use('/', index);
app.use('/api/users', users);
app.use('/api/quest', questions)
app.use('/api/answer', answers)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
