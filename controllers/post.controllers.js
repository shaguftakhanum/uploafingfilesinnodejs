const Post = require('../models/post');
const File = require('../models/file');
const createpost = async (req, res) => {
    try {
        const name = req.body.name;
        const images = req.body.files;
        const testId = req.body.blog_id;
        const post = await Post.create({
            name: name,
            blog_id: testId,
        })
        const imagesData = images.map((image) => {
            return {
                name: image,
                type: 2,
                type_id: post.id
            }
        })

        res.json(post)
        File.bulkCreate(imagesData);


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
        const files = await File.destroy({
            where: {
                type: 2,
                type_id: req.params.id
            }
        })
        res.json({
            message: "succcess", data: {
                posts: posts,
                files: files
            }
        })
    } catch (error) {
        res.status(200).send(error.message)
    }
}

const updatebyid = async (req, res) => {

    try {

        const posts = await Post.update({ name: req.body.name }, {
            where: {
                id: req.params.id,
            }
        })
        await File.destroy({
            where: {
                type_id: req.params.id,
                type: 2
            }
        })
        const images = req.body.files
        const imagesData = images.map((image) => {
            return {
                name: image,
                type: 2,
                type_id: req.params.id
            }
        })


        File.bulkCreate(imagesData);

        res.json({
            message: "succcess", data: {
                post:posts,
                // files: images,
                imagesData: imagesData

            }
        })

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

        const files = await File.findAll({
            where: {
                type_id: req.params.id,
                type: 2
            }
        })
        res.json({ message: "succcess", data: { posts: posts, files: files } })
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