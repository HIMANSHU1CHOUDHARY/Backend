const mongoose=require('mongoose');
const userModel=require('../models/user.model');
const bcrypt=require('bcryptjs');
const {createAccessToken,createRefreshToken}=require('../utils/auth.utils');
const authController=async(req,res)=>{
    const {email,name,password}=req.body;
    const isAlreadyExists=await userModel.findOne({
        email
    });
    if(isAlreadyExists){
        return res.status(400).json({
            message:"User already exist",
            errors:[{
                field:"email",
                message:"user already exist with this email address"
        }]
        })
    }
    const passwordHash=await bcrypt.hash(password,12);
    const user=await userModel.create({
        email,name,
        passwordHash:passwordHash
    })
    const accessToken=createAccessToken({userId:user._id,role:user.role})
    const refreshToken=createRefreshToken({userId:user._id,role:user.role});
    console.log(accessToken);

}
module.exports=authController;