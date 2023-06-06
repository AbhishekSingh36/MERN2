const Blogs = require('../models/blogs.models')

const createNewBlog = async (request, response) => {
    const document = new Blogs({title: 'First Blog'})
    await document.save()
    console.log(document, 'Blog Details')
    response.sendStatus(200)
}

module.exports = {
    createNewBlog
}