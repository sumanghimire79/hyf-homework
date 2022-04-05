// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require('express');
const app = express();
const moviesRouter = require('./api/movies-router');

// This is where you want to create your is chrome browser middleware (second exercise)

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use('/api/movies', moviesRouter);

//middle ware function by me
app.use((request, response, next) => {
    // const myQuery = request.query;
    // console.log(myQuery);
    // console.log(request);
    request.isChromeBrowser = request.headers['sec-ch-ua'].includes('Chrome');
    next();
});

// For testing purposes only!! Used to check if the middleware function is implemented correctly
app.get('/middleware-test', async(request, response) => {
    response.send({
        data: {
            isChromeBrowser: request.isChromeBrowser,
        },
    });
    // console.log(request.isChromeBrowser);
    // console.log(request.headers['user-agent']);
    // response.json(request.headers);
});

module.exports = app;