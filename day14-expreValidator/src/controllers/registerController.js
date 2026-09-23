const authModel=require('../models/auth.model');

const registerController=async (req,res)=>{
    const {email,phone,password}=req.body;
    const user=await authModel.create({
        email,phone,password
    })
    res.status(200).json({
        message:"user registerd successfully",
        data:{
            email,password,id:user._id
        }
    })
}

module.exports=registerController;