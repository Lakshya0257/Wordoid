const Blog=require('../database/model/blogModel');

exports.getAllBlogs=async (req,res)=>{
    const allBlogs=await Blog.Blogs.find();
    // console.log(allBlogs);
    res.status(200).json({
        status:'success',
        results:allBlogs.length,
        data:{allBlogs}
    })
}

exports.getBlogComment=async(req,res)=>{
    console.log(req.params);
    try{
        const comment=await Blog.getComments(req.params.id);
        if(comment==='no-comments'){
            res.status(200).json({
                status: 'Not Found',
              });
        }else{
            res.status(200).json({
                status: 'success',
                data: {
                  comment
                }
              });
        }
        
      }catch(err){
        res.status(404).json({
          status:"fail",
          message:"Not Found!"
        })
      }
}

exports.postComment=async(req,res)=>{
    const data=await Blog.postComment(req.params.id,req.body);
    if(data==='posted'){
        res.status(201).json({
            status:'success',
        });
    }else{
        res.status(400).json({
            status:"fail",
            message:data
          })
    }


}