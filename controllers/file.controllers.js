const File = require('../models/file');
const createfile = async (req, res) => {
  try {

    const { name } = req.body;
    console.log("name ===> ", name);
    const file = await File.create({
      name: name,
    })
    res.json(file)

  } catch (error) {
    res.status(200).send("error")
  }
}
const deletefile = async (req, res) => {


  try {
    const files = await File.destroy({
      where: {
        id: req.params.id
      }
    })

    res.json({ message: "succcess", data: files })
  } catch (error) {

    res.status(200).send(error.message)
  }
}








const updatebyid = async (req, res) => {

  try {
    const files = await File.update(req.body, {
      where: {
        type_id: req.params.id,
        type:1
      }
    })

    res.json({ message: "succcess", data: files })

  }

  catch (error) {


    res.status(200).send(error.message)
  }
}


const findallfile = async (req, res) => {
  try {
    const files = await File.findAll();
    res.json({ message: "succcess", data: files })
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

const findonefile = async (req, res) => {
  try {

    const files = await File.findOne({
      where: {
        id: req.params.id
      }
    })

    res.json({ message: "succcess", data: files })
  }
  catch (error) {
    res.status(500).send(error.message)

  }
}
// console.log('deletePost =>' ,  deletePost);

module.exports = {
  createfile,
  deletefile,
  findallfile,
  updatebyid,
  findonefile
}
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mongodb