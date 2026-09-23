const urlModel=require('../model/url.model');
const generateCode = require('../utils/generateCode');
const takeUrlController=async (req,res)=>{
    const {Url}=req.body;
    const code=generateCode();
    if(!Url){
        return res.status(400).json({
            message:"url is required"
        });}
    
    if(Url.length>2048){
        return res.status(400).json({
            error:"Url length is long"
        })
    };
    const newUrl=await urlModel.create({
        originalUrl:Url,shortCode:code
    });
    return res.status(200).json({
        message:"Url short successfully",
        data:{
            newUrl
        }
    })

    
}
const getUrl=async (req,res)=>{
    const urls=await urlModel.find();
    return res.status(200).json({
        data:{
            urls
        }

    })

}
const deleteUrl=async (req,res)=>{
    const {id}=req.params;
    const newurl=await urlModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"url deleted successfully",
        
    })

}
module.exports={takeUrlController,getUrl,deleteUrl};