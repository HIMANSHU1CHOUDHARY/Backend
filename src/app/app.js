const express=require('express')
const app=express();
const router=require('../routes/auth.routes');
app.use(express.json());
app.use('/api/auth',router);
module.exports=app;