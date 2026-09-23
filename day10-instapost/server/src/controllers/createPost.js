const postModel = require("../models/post.model");
const sendfiles = require("../services/storage.services");

const createPost=async(req,res)=>{
    const {caption}=req.body;
    const file=req.file;
    if(!caption|| !file){
        return res.status(400).json({
            success:false,
            message:'fields are required' 
        })
    }
    const uploadImage=await sendfiles(file.buffer,file.originalname);
    const post=await postModel.create({
        caption,
        image:uploadImage.url
    });
    return res.status(200).json({
        success:true,
        message:"data sent successfully",
        post
    })
}
module.exports=createPost;