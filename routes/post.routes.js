const router = require("express").Router();
//const mongoose = require("mongoose");
const User = require("../models/User.model");

const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");
const Post = require("../models/Post.model");


router.route('/')
.get(isLoggedIn,(req,res)=>{
  res.render('post-form')
})
.post((req,res)=>{
  const content=req.body.content;
  const creatorId=req.session.currentUser._id
  const picPath=req.body.picPath;
  const picName=req.body.picName;

  const post={content,creatorId,picPath,picName}

  Post.create(post)
  .then(res.redirect('/'))
})

router.get('/:id',(req,res)=>{
  const id = req.params.id;
  Post.findById(id)
  .then((post)=>{
    res.render('post-detail',post)
  })

})




module.exports=router