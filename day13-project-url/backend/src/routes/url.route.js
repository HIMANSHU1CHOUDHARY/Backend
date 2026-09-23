const express=require('express');
const router=express.Router();
const urlModel=require('../model/url.model');
const {takeUrlController,getUrl,deleteUrl}=require('../controllers/takeUrlController');
router.post('/',takeUrlController);
router.get('/',getUrl);

router.delete('/:id',deleteUrl);
router.get("/:code", async  (req, res)=> {

    try{

    const { code } = req.params;
    console.log('code',code);

    const Url = await urlModel.findOne({
        shortCode: code
    })
      
      console.log("originalUrl:", Url.originalUrl);

    if (!Url) {
        return res.status(404).json({ error: "URL not found" })
    }
  
    

    await urlModel.findOneAndUpdate({
        shortCode: code
    }, {
        $inc: { clicks: 1 }
    })
   
    return res.redirect(302,Url.originalUrl);
}
catch(error){
    console.log("error",error);
    return res.status(500).json({
        error: "Internal server error"
    });
}
})

module.exports=router;