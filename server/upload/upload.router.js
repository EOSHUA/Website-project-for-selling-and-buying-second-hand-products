
const express = require('express'),
    router = express.Router();
    const upload=require("./upload.service")



router.post('/uploadImage', async (req, res) => {

    try {
        
        const url=await upload.uploadImage(req.body.image);
        res.send(url)
    }
    catch (err) {
        console.log("catch");
    }
})









module.exports = router;