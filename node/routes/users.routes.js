const router = require('express').Router();
const usersControllers = require('../controllers/users.controllers');
const { route } = require('./currencies.routes');

router.get('/', usersControllers.getUsers);