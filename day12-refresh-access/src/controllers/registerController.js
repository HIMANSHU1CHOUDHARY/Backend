
const userModel=require('../model/user.model');
const generateToken=require('../utils/auth');
const cookie=require('cookie-parser');
const bcrypt=require('bcryptjs');
const registerController=async(req,res)=>{
    const{name,email,password}=req.body;
    const isUserExists=await userModel.findOne({email});
    if(isUserExists){
        res.status(401).json({
            message:"USer already exists"
        })
    }
    const hashedPassword=await bcrypt.hash(password,12);
    const user=await userModel.create({
        name,email,password:hashedPassword
    })
    const {accessToken,refreshToken}=generateToken({userId:user._id});
    user.refreshToken=refreshToken;
    await user.save();
    res.cookie('refreshToken',refreshToken,{
        httpOnly:true
    });
    res.status(200).json({
        message:"user registered successfully",
        data:{
            name:user.name,
            email:user.email
        },accessToken
    })

}

module.exports=registerController;