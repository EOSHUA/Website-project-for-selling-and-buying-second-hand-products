
const express = require('express'),
    router = express.Router();
    const upload=require("./upload.service")



router.get('/uploadImage', async (req, res) => {
    try {
        await upload.uploadImage(req.body.image);
    }
    catch (err) {
        console.log("catch");
    }
})

console.log("try");







module.exports = router;