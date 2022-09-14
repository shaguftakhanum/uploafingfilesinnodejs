
const Post = require('../models/post');
const File = require('../models/file');


const createpost = async (req, res) => {
    try {
        const { name, images } = req.body

        const post = await Post.create({
            name: name
        })

        const imagesData = images.map((image) => {
            return {
                name: image,
                type_id: post.id,
                type:2

            }
        })

        File.bulkCreate(imagesData);
        res.json(post)

    }
    catch (error) {
        // res.send(error.message, 500);
         res.status(200).send("error")
   }




}
const deletepost = async (req, res) => {


    try {
        const posts = await Post.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json({ message: "succcess", data: posts })
    } catch (error) {

        res.status(200).send(error.message)
    }
}

const updatebyid = async (req, res) => {

    try {

        const posts = await Post.update(req.body, {
            where: {
                id: req.params.id,
            }
        })

        res.json({ message: "succcess", data: posts })

    }

    catch (error) {


        res.status(200).send(error.message)
    }
}


const findallpost = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json({ message: "succcess", data: posts })
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

const findonepost = async (req, res) => {
    try {

        const posts = await Post.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json({ message: "succcess", data: posts })
    }
    catch (error) {
        res.status(500).send(error.message)

    }
}





// console.log('deletePost =>' ,  deletePost);

module.exports = {
    createpost,
    deletepost,
    findallpost,
    updatebyid,
    findonepost


}
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mongodb