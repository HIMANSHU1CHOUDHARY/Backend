const express=require('express');
const {createNotesController,allNotesController,updateNotesController} = require('../controllers/notes.controller');
const router=express.Router();

router.post('/create',createNotesController);
router.get('/allNotes',allNotesController);
router.put('/:id',updateNotesController);
module.exports=router;