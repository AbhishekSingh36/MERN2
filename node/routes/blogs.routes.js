const router = require('express').Router();
const blogsController = require('../controllers/blogs.controller')

router.get('/new', blogController.createnewBlog)


module.exports = router