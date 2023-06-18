const Blogs = require('../models/blogs.models')

const findAllBlogs = async () => {
    return await Blogs.find({})
}

module.exports = {
    findAllBlogs
}