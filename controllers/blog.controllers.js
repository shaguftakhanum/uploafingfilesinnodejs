const Blog = require('../model/blog');
const File = require('../model/file');

const deletePost = async (req, res) => {
  try {
    const user = await Blog.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({ message: "succcess", data: user })
  } catch (error) {
    res.status(200).send(error.message)
  }
}
const updatebyid = async (req, res) => {
  try {
    const user = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    res.json({ message: "succcess", data: user })
  }
  catch (error) {
    res.status(200).send(error.message)
  }
}
const findallPost = async (req, res) => {
  try {
    const files = await Blog.findAll();
    res.json({ message: "succcess", data: files })
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}
const findonePost = async (req, res) => {
  try {
    const user = await Blog.findOne({
      where: {
        id: req.params.id
      }
    })

    res.json({ message: "succcess", data: user })
  }
  catch (error) {
    res.status(500).send(error.message)

  }
}
module.exports = {
  // createPost,
  deletePost,
  findallPost,
  updatebyid,
  findonePost


}


