const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const employeeSelect = require('./employee_select');
const employeeInsert = require('./employee_insert');
const employeeUpdate = require('./employee_update');
const employeeDelete = require('./employee_delete');

// All Routes for API
app.get('/getemployee', employeeSelect.getEmployee);
app.get('/monoemployee/:id', employeeSelect.singleEmployee);
app.post('/addemployee', employeeInsert.addEmployee);
app.put('/putemployee/:id', employeeUpdate.putEmployee);
app.delete('/delemployee/:id', employeeDelete.delEmployee);

module.exports = app;


















