const Blogs = require('../models/blogs.models')

const findAllBlogs = async () => {
    return await Blogs.find({})
}
const createNewBlog = async (data) => {
    const document = new Blogs(data) // takes an input
    await document.save()
}

module.exports = {
    findAllBlogs,
    createNewBlog,
}