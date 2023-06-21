const Blogs = require("../models/blog.model");

class BlogService {  
  save = async (doc) => {
    const result = await doc.save();
    return result;
  };

  findAll = async () => {
    const allBlogs = await Blogs.find({});
    return allBlogs;
  };

  create = async (body) => {
    const newDoc = new Blogs(body);
    const savedDoc = await this.save(newDoc);
    return savedDoc;
  };

  delete = async (documentId) => {
    const deletedDoc = await Blogs.findOneAndDelete(documentId);
    return deletedDoc;
  };

  update = async (id, updateObject) => {
    const filter = { _id: id }; //conditions to find the document
    //new: true -> returns the updated document
    const updatedDoc = await Blogs.findOneAndUpdate(filter, updateObject, {
      new: true,
    });
    return updatedDoc;
  };

  findByAuthorOrTitle = async ({ title, author }) => {
    const matchingBlogs = await Blogs.find({
      $or: [
        { title: { $regex: new RegExp(title), $options: "gi" } },
        { author: { $elemMatch: { email: author } } },
      ],
    });
    return matchingBlogs;
  };
}

module.exports = BlogService;