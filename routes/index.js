const router = require("express").Router();
const { findById } = require("../models/Post.model");
const Post = require("../models/Post.model");



/* GET home page */
router.get("/", (req, res, next) => {
  Post.find()
  .then((post)=>res.render("index",{post}))
});


module.exports = router;
