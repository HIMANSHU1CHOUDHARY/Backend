const express=require('express');
const connectDb=require('./config/db');
const notes=require('./models/note.model');
const app=express();
//middleware
app.use(express.json());
connectDb();
app.post('/create',async (req,res)=>{
    let {title,description}=req.body;
    const newNote=await notes.create({ 
        title,description
    });
    res.send({
        success:true,message:"Note Created Successfully",data:newNote,
    });
})

app.get('/',(req,res)=>{ 
    res.send('done');
})
module.exports=app;