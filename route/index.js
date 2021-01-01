// Router Link
const app = require('express').Router();


// All page links should be routed here

// Importing employee routes
const userRoute = require('../controller/user/user.route');

app.use(userRoute);

module.exports = app;
