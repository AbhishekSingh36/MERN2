const Blogs = require('../models/blogs.models')

const createNewBlog = (request, response) => {
    const document = new Blogs({title: 'First Blog'})
    console.log(document)
    response.sendStatus(200)
}

module.exports = {
    createNewBlog
}