const mongoose=require('mongoose');
const config=require('../config/config');
const connectDb=async ()=>{
    await mongoose.connect(config.MONGO_URI);
    console.log("databse is connected successfully");
}
module.exports=connectDb;