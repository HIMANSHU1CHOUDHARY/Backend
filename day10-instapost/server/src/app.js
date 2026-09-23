const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env')
});

console.log("ENV PATH:", path.join(__dirname, '../.env'));
console.log("PUBLIC KEY:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("URL:", process.env.IMAGEKIT_URL_ENDPOINT);


const express=require('express');
const router=require('./routes/post.route');
const connectDb=require('./cofig/db.config');

const app=express();
app.use(express.json());
app.use('/api/post',router);
connectDb();
module.exports=app;