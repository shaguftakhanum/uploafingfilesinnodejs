const Blog = require('../models/blog');
const createblog = async (req, res) => {
  console.log('req ===> ', req.body);
  try {
    const name =   req.body.name;
    const images =   req.body.images;
    const blog = await Blog.create({
      name: name,
    })
    const imagesData = images.map((image) => {
      return {
          name: image,
          type: 1,
          type_id: blog.id
      }
  })

  Blog.bulkCreate(imagesData);
    res.json(blog)

  } catch (mistake) {
    res.status(200).send("mistake")
  }
}
const updatebyid = async (req, res) => {
  try {
    const blog = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    res.json({ message: "succcess", data: blog })
  }
  catch (error) {
    res.status(200).send(error.message)
  }
}
const deleteblog = async (req, res) => {


  try {
      const blogs = await Blog.destroy({
          where: {
              id: req.params.id
          }
      })

      res.json({ message: "succcess", data: blogs })
  } catch (error) {

      res.status(200).send(error.message)
  }
}
const findallblog = async (req, res) => {
  try {
    const blog = await Blog.findAll();
    res.json({ message: "succcess", data: blog })
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}
const findoneblog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: {
        id: req.params.id
      }
    })

    res.json({ message: "succcess", data: blog })
  }
  catch (error) {
    res.status(500).send(error.message)

  }
}
module.exports = {
  createblog,
  deleteblog,
  findallblog,
  updatebyid,
  findoneblog
}
