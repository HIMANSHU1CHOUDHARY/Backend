const mongoose=require('mongoose');
const connectDb=async ()=>{
    try {
        await  mongoose.connect('mongodb://localhost:27017/cohort-auth');
        console.log('MongoDb connected successfully');
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=connectDb;