const express=require("express");
const router=express.Router();

const {
    createpost,
    deletepost,
    findallpost,
    updatebyid,
    findonepost

}=require("../controllers/post.controllers");
router.route("/post/create").post(createpost);
router.route("/post/:id").delete(deletepost);
router.route("/post/getall").get(findallpost);
router.route("/post/:id").get(findonepost);
router.route("/post/:id").put(updatebyid);
module.exports=router;
