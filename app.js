var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./models/index');


//API ROUTES
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resultsRouter = require('./routes/results');
var favoritesRouter = require('./routes/favorites');
var eventsRouter = require('./routes/events');
var schoolRouter = require('./routes/school');
var faqRouter = require('./routes/faq');

//HTML ROUTES
var profileRouter = require('./routes/htmlRoutes/profile');
var registerRouter = require('./routes/htmlRoutes/register');
var signInRouter = require('./routes/htmlRoutes/signIn');
var signUpFailedRouter = require('./routes/htmlRoutes/signUpFailed');


var app = express();

//Required for user login
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');

// //For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//Data Routes
app.use('/users', usersRouter);
app.use('/favorites',favoritesRouter);
app.use('/results',resultsRouter);
app.use('/events',eventsRouter);
app.use('/school', schoolRouter);
app.use('/faq', faqRouter);

//HTML Routes
app.use('/profile',profileRouter);
app.use('/register',registerRouter);
app.use('/signin',signInRouter);
app.use('/signupfailed',signUpFailedRouter);

//load passport strategies
require('./config/passport')(passport, db.User);

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
