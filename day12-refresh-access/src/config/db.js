const mongoose=require('mongoose');
const config=require('./config');
const connectDb=async()=>{
    await mongoose.connect(config.MONGO_URI);
    console.log('Mongo db is connectd');
}
module.exports=connectDb;