// imports
const express = require('express');
const app = express();

// middleware router
const mealsRouter = require('./api/meals-router');
const reservationsRouter = require('./api/reservations-router');
const reviewRouter = require('./api/reviews-router');

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use('/api/meals', mealsRouter);
app.use('/api/reservations', reservationsRouter);
app.use('/api/reviews', reviewRouter);
module.exports = app;  