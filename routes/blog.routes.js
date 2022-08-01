const express=require("express");
const router=express.Router();
const {
    
    deletePost,
    findallPost,
    updatebyid,
    findonePost

}=require("../controllers/blog.controllers");

router.route("/blogs/:id").delete(deletePost);
router.route("/blogs/getall").get(findallPost);
router.route("/blogs/:id").get(findonePost);
router.route("/blogs/:id").put(updatebyid);
module.exports=router;
