const config=require('./config');
const mongoose=require('mongoose');
const connectDb=async ()=>{
    await mongoose.connect(config.MONGO_URI);
    console.log("Database is conected successfully"); 

}
module.exports=connectDb;