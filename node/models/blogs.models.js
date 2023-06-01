const mongoose = require('mongoose')

// Schema tells you what the keys are and what valuses should be --- Models will give you the API to do it
 const blogSchema = new mongoose.Schema({
    title: String,
    author: [String],
    content: String,
    publishedAt: Date
 })

 // To use and validate data we use mongoose model
 const model = mongoose.model('Blogs', blogSchema)

 module.exports = model;