const mongoose=require('mongoose');
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log("DNS configured:", dns.getServers());
const connectDb=async()=>{
    try{
        await mongoose.connect('mongodb+srv://jaathimanshu988_db_user:Himanshu2281@cohort-cluster.2aw2smg.mongodb.net/');
        // console.log(process.env.MONGO_URI);
        
        console.log("database is conected");

    }
    catch(error){
        console.log(error);
    }
}
module.exports=connectDb;