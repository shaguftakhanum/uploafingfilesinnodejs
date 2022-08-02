const express=require("express");
const router=express.Router();
const {
    createfile,
    deletefile,
    findallfile,
    updatebyid,
    findonefile

}=require("../controllers/file.controllers");
// console.log('deletePost =>' , deletePost);
router.route("/file/:id").delete(deletefile);
router.route("/file/create").post(createfile);
router.route("/file/getall").get(findallfile);
router.route("/file/:id").get(findonefile);
router.route("/file/:id").put(updatebyid);
module.exports=router;


