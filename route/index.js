// Router Link
const app = require('express').Router();


// All page links should be routed here

// Importing employee routes
const employeeRoute = require('../controller/employee/employee.route');
app.use(employeeRoute);

module.exports = app;