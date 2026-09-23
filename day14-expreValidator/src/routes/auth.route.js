const express=require('express');
const router=express.Router();
const registerController=require('../controllers/registerController');
const  registerValidation=require('../validations/authValidation');
router.post('/register',registerValidation,registerController);


module.exports=router;