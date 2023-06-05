const router = require('express').Router();
const blogsController = require('../controllers/blogs.controllers')

router.get('/new', blogsController.createNewBlog)


module.exports = router