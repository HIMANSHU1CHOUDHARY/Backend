const express=require('express');
const app=express();
const cors=require('cors');
const connectDb=require('./config/db');
const notesModel=require('./models/notes.model');
const mongooose=require('mongoose');
const notesRoute=require('./routes/notes.routes');
app.use(cors({
    origin:'http://localhost:5173',
}));
app.use(express.json());
connectDb();

app.use('/notes',notesRoute);
module.exports=app;