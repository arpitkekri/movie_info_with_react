var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var omdbRouter = require('./routes/omdb');
// var indexRouter = require('./routes/index.js'); // semicolon and .js extension is optional in JavaScript
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middlewares
// These will not send a response 
app.use(logger('dev'));     // Logs incoming req
app.use(express.json());    // Analyses the request body converts string to json req.body
app.use(express.urlencoded({ extended: false })); // Converts URL parameters into json req.params
app.use(cookieParser());    // Parses cookies

// To handle CORS errors
app.use(cors());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');  // value = * to give access to any origin
//   res.header('Access-Control-Allow-Headers', 'Origin X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin');
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
//   }
//   next();
// });




// These can send a response or pass it on
// Based on url we can do one of two things
// 1. Return a file -> Deleted everything in public as I dont want to return any files
// 2. Execute a function and return result from that function 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', omdbRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
