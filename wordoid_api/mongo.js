const mongoose=require("mongoose");


exports.databaseConnection=()=>{
  const DB=process.env.DATABASE.replace('<password>',process.env.PASSWORD);
  mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology:true
}).then(()=>{
  console.log('Connection Established');
});
};