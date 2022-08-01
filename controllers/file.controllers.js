
const File = require('../model/file');
const createPost = async (req, res) => {
  try {

    const { name, images } = req.body

    const blog = await File.create({
      name: name
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

  } catch (error) {
    res.send(error.message, 500);
  }




}
const deletePost = async (req, res) => {


  try {
    const user = await File.destroy({
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

    const user = await File.update(req.body, {
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
    const files = await File.findAll();
    res.json({ message: "succcess", data: files })
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

const findonePost = async (req, res) => {
  try {

    const user = await File.findOne({
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





// console.log('deletePost =>' ,  deletePost);

module.exports = {
  createPost,
  deletePost,
  findallPost,
  updatebyid,
  findonePost


}
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mongodb