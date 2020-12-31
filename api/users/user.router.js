// all controllers imported
const { createUser, getUsersByUserId, getUsers, updateUsers, deleteUser, login } 
= require('./user.controller');
const router = require('express').Router();

// Validate user token middleware
const { checkToken } = require("../../auth/token_validation");


// routers path and added token check
router.post('/', checkToken, createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUsersByUserId);
router.patch('/', checkToken, updateUsers);
router.delete('/', checkToken, deleteUser); 
router.post('/login', login);

module.exports = router;