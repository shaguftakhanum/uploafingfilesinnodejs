const Tag = require('../models/tag');
const File = require('../models/file');
const createtag = async (req, res) => {
    try {
        const { name, images } = req.body

        const tag = await Tag.create({
            name: name
        })

        const imagesData = images.map((image) => {
            return {
                name: image,
                type: 3,
                type_id: tag.id
            }
        })

        File.bulkCreate(imagesData);
        res.json(tag)

    }
    catch (error) {
        // res.send(error.message, 500);
         res.status(200).send("mistake")
    }
}



const deletetag = async (req, res) => {


    try {
        const tags = await Tag.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json({ message: "succcess", data: tags })
    } catch (error) {

        res.status(200).send(error.message)
    }
}

const updatebyid = async (req, res) => {

    try {

        const tags = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            }
        })

        res.json({ message: "succcess", data: tags })

    }

    catch (error) {


        res.status(200).send(error.message)
    }
}


const findalltag = async (req, res) => {
    try {
        const tag = await Tag.findAll();
        res.json({ message: "succcess", data: tag })
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

const findonetag = async (req, res) => {
    try {

        const tags = await Tag.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json({ message: "succcess", data: tags })
    }
    catch (error) {
        res.status(500).send(error.message)

    }
}
// console.log('deletePost =>' ,  deletePost);

module.exports = {
    createtag,
    deletetag,
    findalltag,
    updatebyid,
    findonetag
}
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mongodb