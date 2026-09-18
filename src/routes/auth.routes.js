const express=require('express');
const router=express.Router();
const registerValidator=require('../validators/auth.validators');
const authController=require('../controllers/auth.controller');
router.post('/register',registerValidator,authController);
module.exports=router;