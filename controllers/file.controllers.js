
const File = require('../model/file');
const createfile = async (req, res) => {
  try {


    const { name, images } = req.body

    const file = await File.create({
      name: name
    })

    const imagesData = images.map((image) => {
      return {
        name: image,
        type: 1,
        type_id: file.id


      }
    })

    File.bulkCreate(imagesData);
    res.json(file)

  } catch (error) {
    res.send(error.message, 500);
  }




}
const deletefile = async (req, res) => {


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
  createfile,
  deletefile,
  findallfile,
  updatebyid,
  findonefile


}
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mongodb