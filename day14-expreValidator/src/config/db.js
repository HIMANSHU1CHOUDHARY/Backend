const mongoose=require('mongoose');
const config=require('../config/config')
const connectDb=async ()=>{
    await mongoose.connect(config.MONGO_URI);
    console.log('mongoDb is connect ');
}
module.exports=connectDb;