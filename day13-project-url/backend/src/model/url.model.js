const mongoose=require('mongoose');
const urlSchema=new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        click:0
    }

}, {timestamps:true});
const urlModel=mongoose.model('urls',urlSchema);
module.exports=urlModel;