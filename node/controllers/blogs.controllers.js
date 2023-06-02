const { response } = require('express')
const Blogs = require('../models/blogs.models')

const createNewBlogs = (Request, Response) => {
    const document = new Blogs({title: 'First Blog'})
    console.log(document)
    response.sendStatus(200)
}

module.exports = {
    createNewBlogs
}