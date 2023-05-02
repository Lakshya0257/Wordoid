const express = require('express');
const { getUserBlogs,postUserBlog } = require('../controllers/profileController');

const router=express.Router();

router.route('/').get(getUserBlogs).post(postUserBlog);


module.exports=router;

