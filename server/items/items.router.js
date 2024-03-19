const express = require('express'),
    router = express.Router();

const itemsService = require('./items.service')

router.get('/', async (req, res) => {
    try {
        let result = await itemsService.getAllItems();
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})
// router.post("/uploadImage", async (req, res) => {
//     try {
//       const url = await itemsService.uploadImage(req.body.image);
//       res.send(url);
//     } catch (error) {
//       console.log(error.message + "\n" + error);
//       res.status(500).send({ error: error.message });
//     }
//   });

// router.post("/uploadMultipleImages", (req, res) => {

//     itemsService
//       .uploadMultipleImages(req.body.images)
//       .then((urls) => res.send(urls))
//       .catch((err) => res.status(500).send(err));
//   });

router.post('/getMyAds', async (req, res) => {
    try {
        
       
        let result = await itemsService.getAllMyAds(req.body.memberConnected);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})


router.post('/creatItem', async (req, res) => {
    try {
        let result = await itemsService.creatItem(req.body.item);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
    
})
router.delete('/delete', async (req, res) => {
    try {
        
        let result = await itemsService.deleteOneItem(req.body.itemId );
        res.send(result)
      
   ;
    }
    catch (err) {
        res.status(err?.code ?? 400).send({message: err?.msg});
    }
});






module.exports = router