const router = require('express').Router();
const blogsController = require('../controllers/blogs.controllers')

//router.get('/new', blogsController.createNewBlog)
router.get('/', blogsController.getAllBlogs)
router.delete('/:id', blogsController.deleteBlogWithid)
router.patch('/:id', blogsController.updateBlogWithId)
router.post('/new', blogsController.createNewBlog)

module.exports = router
