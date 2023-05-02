const mongoose=require("mongoose");
const blogSchema=require('../schema/blog_schema');

exports.Blogs=mongoose.model('blogs',blogSchema.newBlogSchema);

exports.getComments=async (id)=>{
    try{
        const data=await mongoose.model(id,blogSchema.commentSchema).find();
        return data
    }catch{
        return 'no-comments'
    }
}

exports.postComment=async(id,body)=>{
    try{
        await mongoose.model(id,blogSchema.commentSchema).create(body);
        return 'posted'
    }catch(err){
        return err
    }
}


