const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const router=require('./routes/user.route');
const connectDb=require('./config/db');
connectDb();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',router);

module.exports=app;