const express=require('express');
const {createNotesController,allNotesController,updateNotesController,deleteNoteController} = require('../controllers/notes.controller');
const router=express.Router();

router.post('/create',createNotesController);
router.get('/',allNotesController);
router.put('/:id',updateNotesController);
router.delete('/:id',deleteNoteController);
module.exports=router;