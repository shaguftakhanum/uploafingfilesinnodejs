const express=require("express");
const router=express.Router();
const {

    deleteblog,
    findallblog,
    updatebyid,
    findoneblog

}=require("../controllers/blog.controllers");
router.route("/blogs/:id").delete(deleteblog);
router.route("/blogs/getall").get(findallblog);
router.route("/blogs/:id").get(findoneblog);
router.route("/blogs/:id").put(updatebyid);
module.exports=router;
