const { default: mongoose } = require('mongoose');
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
    const update=await notesModel.findByIdAndUpdate(id.trim(),body,{new:true});
    if (!update) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(201).json({
        mesaage:"note is updateed",
        data:update,
    });

}

const deleteNoteController=async(req,res)=>{
    let  {id}=req.params;
    let deleteNote=await notesModel.findByIdAndDelete(id.trim());
    res.status(200).json({
        message:"note is deleted successfully",
        data:deleteNote,
    })
}
module.exports={
    createNotesController,
    allNotesController,updateNotesController,deleteNoteController};