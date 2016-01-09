var bodyParser   = require('body-parser'),
    cookieParser = require('cookie-parser'),
    express      = require('express'),
    favicon      = require('serve-favicon'),
    logger       = require('morgan'),
    path         = require('path');

var routes = require('./routes/index'),
    users  = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '..', 'dist'));

//app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (request, response, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use(function (error, request, response, next) {
  response.status(error.status || 500);
  response.json({
    message : error.message,
    error   : app.get('env') === 'development' ? error : {}
  });
});

module.exports = app;
