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
router.get('/getMyAds', async (req, res) => {
    try {
        let result = await itemsService.getAllMyAds();
        console.log(result);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})





module.exports = router