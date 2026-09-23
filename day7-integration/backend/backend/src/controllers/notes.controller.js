const notesModel=require('../models/notes.model');
const createNotesController=async(req,res)=>{
    let {title,description}=req.body;
    let newNote=await notesModel.create({
        title,description
    });
   return res.status(201).json({
        message:"Note created Successs",
        data:newNote,
    });
}

const allNotesController=async(req,res)=>{
    const allNote=await notesModel.find();
    res.status(200).json({
        message:"all notes fetched",
        data:allNote,
    })
}
const updateNotesController=async (req,res)=>{
    const {id}=req.params;
    const body=req.body;
    const update=await notesModel.findByIdAndUpdate(id,body,{new:true});
    res.status(201).json({
        mesaage:"descrptionn is updateed",
        data:update,
    })

}
module.exports={
    createNotesController,
    allNotesController,updateNotesController};