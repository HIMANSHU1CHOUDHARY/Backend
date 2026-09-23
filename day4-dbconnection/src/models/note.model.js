const mongoose =require('mongoose');
const notesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        minlength:10
    }
});
const note=mongoose.model('notes',notesSchema);
module.exports=note;