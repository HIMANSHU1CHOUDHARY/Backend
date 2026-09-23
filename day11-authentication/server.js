const app=require('./src/app/app');
const connectDb=require('./src/config/db');
connectDb();
app.listen(3000,()=>{
    console.log("server is running on port no 3000");
});