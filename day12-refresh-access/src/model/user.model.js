const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"Minimum length is 3"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password:{
        type:String
    },
    refreshToken:{
        type:String
    }
});
const userModel=mongoose.model('users',userSchema);
module.exports=userModel;