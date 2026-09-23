const mongoose=require('mongoose');
const authSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const authModel=mongoose.model('auth',authSchema);
module.exports=authModel;