const Blog = require('../model/blog');
const createblog = async (req, res) => {
  try {


    const { name, images } = req.body

    const blog = await Blog.create({
      name: name
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

  } catch (error) {
    res.send(error.message, 500);
  }}

const deleteblog = async (req, res) => {
  try {
    const blog = await Blog.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({ message: "succcess", data: blog })
  } catch (error) {
    res.status(200).send(error.message)
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


