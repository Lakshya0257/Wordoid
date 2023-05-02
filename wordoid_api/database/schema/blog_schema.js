const mongoose=require("mongoose");

exports.newBlogSchema=new mongoose.Schema({
  
  image:{
    type:String,
    required: [true,'A blog must have atleast one image'],
  },
    title:{
      type:String,
      required: [true,'A blog must have a title'],
    },
    description:{
      type:String,
      required: [true,'A blog must have a description']
    },username:{
      type:String,
      required: [true,'Should have a username'],
    }
  });


  exports.commentSchema=new mongoose.Schema({
    username:{
      type:String,
    },comment:{
      type:String
    }
  })