const express=require('express');
const router=express.Router();
const createPost=require('../controllers/createPost');
const upload=require('../cofig/multer')
router.post('/create',upload.single('image'),createPost);
module.exports=router;