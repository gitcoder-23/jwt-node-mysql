const app = require('express').Router();
// Validate user token middleware
const { checkToken } = require('../../auth/token_validation');

// Availing All Required Methods From  Controller For Route
const userSelect = require('./user_select');
const userInsert = require('./user_insert');
const userUpdate = require('./user_update');
const userDelete = require('./user_delete');
const userLogin = require('./user_login');
const userLogout = require('./user_login');

// All Routes for API
app.get('/getuser', checkToken, userSelect.getUser);
app.get('/monouser/:id', checkToken, userSelect.singleUser);
app.post('/adduser', userInsert.addUser);
app.put('/putuser/:id', checkToken, userUpdate.putUser);
app.delete('/deluser/:id', checkToken, userDelete.delUser);
app.post('/login', userLogin.login);
app.post('/logout', userLogout.logout);

module.exports = app;


















