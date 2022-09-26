const Blog = require('../models/blog');
const File = require('../models/file');
const createblog = async (req, res) => {
  console.log('req ===> ', req.body);
  try {
    const name = req.body.name;
    const images = req.body.images;
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

    File.bulkCreate(imagesData);
    res.json(blog)

  } catch (mistake) {
    res.status(200).send("mistake")
  }
}
const updatebyid = async (req, res) => {
  try {
    const blog = await Blog.update({ name: req.body.name }, {
      where: {
        id: req.params.id,
      }
    })
    // console.log("blog=>", blog)

    await File.destroy({
      where: {
        type_id:req.params.id ,
        type: 1
      }
    })

    // console.log("files=>", files)
    const images = req.body.files
    const imagesData = images.map((image) => {
      return {
        name: image,
        type: 1,
        type_id: req.params.id
      }
    })
    console.log("imagesData=> ", imagesData)

    File.bulkCreate(imagesData);

    res.json({
      message: "succcess", data: {
        ...blog,
        files: images,
        imagesData: imagesData

      }
    })
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
    const files = await File.destroy({
      where: {
        type: 1,
        type_id: req.params.id
      }})
    res.json({
      message: "succcess", data: {
        blogs:blogs,
        files:files
      }
    })
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
    const blog = await Blog.findOne({ name: req.body.name },{
      where: {
        id: req.params.id
      }
    })
    const files = await File.findAll({
      where: {
        type_id: req.params.id,
        type:1
      }
    })
    res.json({ message: "succcess", data: { blog: blog, files: files } })
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
