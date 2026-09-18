const {body,validationResult}=require('express-validator');
const registerValidator=[
    body('email')
                 .exists().withMessage("Email is Required").bail()
                 .trim()
                .isEmail().withMessage("Enter valid email address"),
    body('name')
                .exists().withMessage('Name is  required').bail()
                .isString().withMessage('name must be string')
                .trim()
                .isLength({min:2,max:25}).withMessage('Name length must be between 2 and 25 characters'),
    body('password')
                   .exists().withMessage('Password is required').bail()
                   .isString().withMessage('Password must be string')
                   .trim()
                   .isLength({min:6}).withMessage('Password must be min 6 character long'),
    (req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
            message:"Invalid request",
            errors : errors.array()
            })
           
        }
        next();
    }
]
module.exports=registerValidator;