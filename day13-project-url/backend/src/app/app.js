const express=require('express');
const connectDb = require('../config/db');
const router=require('../routes/url.route');
const urlModel=require('../model/url.model');
const app=express();

app.use(express.json());
app.use('/api/url',router);



connectDb();
module.exports=app;