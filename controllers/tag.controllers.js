const Tag = require('../models/tag');
const createtag = async (req, res) => {
    try {
    const entry={
        name:req.body.name,
        type:req.body.type,
        type_id:req.body.type_id
    }
    const tag=await Tag.create(entry);
    res.status(200).send(tag);



    } catch (error) {
        res.status(200).send("not posting")
    }




}
const deletetag = async (req, res) => {


    try {
        const user = await Tag.destroy({
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

        const user = await Tag.update(req.body, {
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

        const user = await Tag.findOne({
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
    createtag,
    deletetag,
    findalltag,
    updatebyid,
    findonetag
}
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mongodb