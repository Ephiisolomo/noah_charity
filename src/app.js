const express = require('express');
const routes = require('./routes');
const ApiError = require('./utils/ApiError');
const app = express();

const httpStatus = require('http-status');

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;