const express = require('express');
const blogController=require('../controllers/blogController');

const router=express.Router();

router.route('/').get(blogController.getAllBlogs);

router.route('/:id').get(blogController.getBlogComment).post(blogController.postComment);


module.exports=router;

