const {body,validationResult}=require('express-validator');
const registerValidation=[
    body('email').exists()
    .withMessage('Email is required')
    .isEmail().withMessage('Invalid email'),
    body('phone').exists().withMessage('Phone is required')
                .isMobilePhone("en-IN").withMessage('mobile no is required'),
    body('password').exists()
                     .withMessage('Password is required')
                     .trim().isLength({min:6}).withMessage("Password atleast 6 characters"),
        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                message: "Invalid Request",
                errors: errors.array()
                })
            }
            next();
        }




]
module.exports=registerValidation;