const router = require('express').Router();
const usersControllers = require('../controllers/users.controllers');
const { route } = require('./currencies.routes');

router.get('/', usersControllers.getUsers);
router.get('/search', usersControllers.searchUsers);
router.get('/:uuid', usersControllers.getUsersWithUuid)

module.exports = router