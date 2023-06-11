const { response } = require("express");
const Blogs = require("../models/blogs.models");

const createNewBlog = async (request, response) => {
  try {
    //const document = new Blogs({title: 'First Blog'}) // hard code the title
    const document = new Blogs(request.body); // takes an input
    await document.save();
    console.log(document, "Blog Details");
    response.sendStatus(200);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async(request, response) => {
  try {
    const blogs = await Blogs.find({})
    response.json(blogs)
    
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
}

const deleteBlogWithid = async(request,response) => {
  try {
    const {id} = request.params;
    const result = await Blogs.findOneAndDelete({_id: id})
    response.json(result)
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
}

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithid
};
