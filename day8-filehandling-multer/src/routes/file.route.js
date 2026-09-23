const express=require('express');
const router=express.Router();
const upload=require('../config/multer');
router.post('/',upload.single('file'),(req,res)=>{
    let body=req.body;
    let file=req.file;
    console.log(body);
    console.log(file);
    res.status(200).json({
        
        message:"file received successfully",
    });
})
module.exports=router;