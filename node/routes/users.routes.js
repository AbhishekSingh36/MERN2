const router = require('express').Router();
const usersControllers = require('../controllers/users.controllers');
const { route } = require('./currencies.routes');
const {validateSearchQuery} = require('../middlewares/validateSearchQuery')

router.get('/', usersControllers.getUsers);
router.get('/search', validateSearchQuery, usersControllers.searchUsers);
router.get('/:uuid', usersControllers.getUsersWithUuid)

module.exports = router