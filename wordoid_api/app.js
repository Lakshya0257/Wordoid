const express=require('express');
const morgan = require('morgan');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const blogRouter=require('./routes/blogRouter');
const profileRouter=require('./routes/profileRouter');



const app=express();
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));



app.use('/blog',blogRouter);
app.use('/profile',profileRouter);

module.exports=app;