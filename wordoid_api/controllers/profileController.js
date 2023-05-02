const Blog=require('../database/model/blogModel');

exports.getUserBlogs=async(req,res)=>{
    console.log(req.query);
    const data=await Blog.Blogs.find({username:req.query.username});
    res.status(200).json({
        status:'success',
        data:{data}
       })
}
exports.postUserBlog=async(req,res)=>{
    const data=await Blog.Blogs.create(req.body);
    res.status(201).json({
        status:'success',
        data:{data}
       })
}