const Blogs = require('../models/blogs.models')

const findAllBlogs = async () => {
    return await Blogs.find({})
}
const createNewBlog = async () => {
    
}

module.exports = {
    findAllBlogs,
    createNewBlog
}