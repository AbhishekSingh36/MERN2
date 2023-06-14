const mongoose = require('mongoose')

// Schema tells you what the keys are and what valuses should be --- Models will give you the API to do it
//  const blogSchema = new mongoose.Schema({
//     title: String,
//     author: [String],
//     content: String,
//     publishedAt: Date
//  })

const authorsSchema = new mongoose.Schema({
   fullName: {type: String, maxlenght:25},
   twitterHandle: {type: String},
   email: {type: String, required: true, maxlenght: 50}
})

const blogSchema = new mongoose.Schema({
   title: {type: String, required: true, unique: true},
   author: {type: [String]},
   content: {type: String, default: ''},
   publishedAt: {type:Date, default: null},
}, {
   timestamps: true
})

 // To use and validate data we use mongoose model
 const model = mongoose.model('Blogs', blogSchema)

 module.exports = model;



