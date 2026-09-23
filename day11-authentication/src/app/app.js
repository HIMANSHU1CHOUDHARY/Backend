const jwt=require('jsonwebtoken');
const express=require('express');
const userModel=require('../models/user.model');
const bcrypt=require('bcryptjs');
const app=express();
app.use(express.json());

app.post('/api/register',async (req,res)=>{
    const {email,name,password}=req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user=await userModel.create({
        email,name,password:hashedPassword
    })
    const token=jwt.sign({
        id:user._id
    }," ruqwPU9iibuODH3B1PMPtmq2JQ28K3wYXwpv8l6QWQ");
    res.status(201).json({
        message:"token can be generated successfully",
        data:{
            user:{
                email,name
            },token
        }
    })
})

app.get('/api/auth/me',async(req,res)=>{
    const authHeader=req.headers.authorization;
    console.log(authHeader);
    const data=jwt.verify(authHeader," ruqwPU9iibuODH3B1PMPtmq2JQ28K3wYXwpv8l6QWQ");
    console.log(data);
    if(!data){
    res.status(400).json({
        message:"token is invalid"
    })}
    
    // const user=await userModel.findById(data.id);
    // console.log(user);
   
})
module.exports=app;