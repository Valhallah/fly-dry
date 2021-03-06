const express = require('express');
let app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require("./models");


const index = require('./controllers/index');
const userApi = require('./controllers/userApi');
const purchase = require('./controllers/purchaseApi');
const location = require('./controllers/locationApi');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', userApi);
app.use('/api', purchase);
app.use('/api', location);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   res.status(500).json({
//         message: err.message,
//         error: err
//     });




  db.sequelize.sync().then(function() {
  });
// });

module.exports = app;
