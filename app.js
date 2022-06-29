var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ControllerRouter = require('./routes/api/controllers/controler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PetFinder Montech Test",
      version: "0.1.0",
      description:
          "PetFnder Widget - Take the data from the petFinder API and provide eihte a service or script that allows other site owners to insert into their websites.https://www.petfinder.com/developers/v2/docs" +
          "\n\nTest Criteria\n1. Design your schema properly for nosql or proper relationships for SQL database implementation.\n2. Write a unit test for all service and controllers\n3. Document your API using postman or Swagger\n4. Host it on live link when done, push the code to Github ",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      repository:{
        name: "GitHub",
        url:"https://github.com/Tekporlipos/PetFinder"
      },
      contact: {
        name: "PetFinder",
        url: "https://montech-petfinder.herokuapp.com/",
        email: "dizikunujohn36@gmail.com",
      },
    },
    servers: [
      {
        name:"Endpont",
        url: "http://localhost:3000/api/v2/",
      },
    ],
  },
  apis: ["./routes/api_moduler.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/documentation",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);



app.use('/', indexRouter);
app.use('/api/v2/', ControllerRouter);



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
