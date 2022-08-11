const express=require("express");
const router=express.Router();
const {
    createtag,
    deletetag,
    findalltag,
    updatebyid,
    findonetag

}=require("../controllers/tag.controllers");
// console.log('deletePost =>' , deletePost);
router.route("/tag/:id").delete(deletetag);
router.route("/tag/create").post(createtag);
router.route("/tag/getall").get(findalltag);
router.route("/tag/:id").get(findonetag);
router.route("/tag/:id").put(updatebyid);
module.exports=router;


