const { response } = require("express");
const Blogs = require("../models/blogs.models");
const {createBlog,findAllBlogs} = require('../services/blogs.services') // ask qoubt in this


const createNewBlog = async (request, response) => {
  try {
    //const document = new Blogs({title: 'First Blog'}) // hard code the title
  
    await createBlog(request.body)
    console.log(document, "Blog Details");
    response.sendStatus(200);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async (request, response) => {
  try {
    const blogs = await Blogs.findAllBlogs()
    response.json(blogs);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

const deleteBlogWithid = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Blogs.findOneAndDelete({ _id: id });
    response.json(result);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

const updateBlogWithId = async (request, response) => {
  try {
    const { id } = request.params;
    const filter = { _idL: id };
    const update = request.body;
    const result = await Blogs.findOneAndUpdate(filter, update, { new: true });
    response.json(result);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};
const searchBlogs = async (request, response) => {
  const { title: inputTitle, author: inputAuthor } = request.query;

  // By default this works as AND condition
  // const data = await Blogs.find({
  //   title: inputTitle,
  //   author: {
  //     $elemMatch: {
  //       email: inputAuthor
  //     }
  //   }
  // })

  // OR Condtiton

  const data = await Blogs.find({
    $or: [
      { title: inputTitle },
      {
        author: {
          $elemMatch: {
            email: inputAuthor,
          },
        },
      },
    ],
  });
  response.json(data);
};
module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithid,
  updateBlogWithId,
  searchBlogs,
};
