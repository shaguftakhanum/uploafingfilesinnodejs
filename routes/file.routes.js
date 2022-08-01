const express=require("express");
const router=express.Router();
const {
    createPost,
    deletePost,
    findallPost,
    updatebyid,
    findonePost
    
}=require("../controllers/file.controllers");
// console.log('deletePost =>' , deletePost);
router.route("/file/:id").delete(deletePost);
router.route("/file/create").post(createPost);
router.route("/file/getall").get(findallPost);
router.route("/file/:id").get(findonePost);
router.route("/file/:id").put(updatebyid);
module.exports=router;


