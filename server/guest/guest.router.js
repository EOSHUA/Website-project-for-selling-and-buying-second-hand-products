
const express = require('express'),
    router = express.Router();

const guestService = require('./guest.service')

// router.post('/',async (req,res)=>{
//     try{
//         let result = await userService.addNewUser(req.body);
//         res.send(result)
//     }
//     catch(err){
//         res.status(err?.code ?? 400).send(err?.msg)
//     }
// })

router.get('/', async (req, res) => {
    try {
        let result = await guestService.getAllCategoris();
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.post(`/subCategory/:cat`, async (req, res) => {
    try {
        
        let result = await guestService.getSubCategory(req.body.parentId);
       
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})
router.post(`/getIds`, async (req, res) => {
    try {
        
        let result = await guestService.findIds(req.body);
       
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.get(`/:id`, async (req, res) => {
    try {
        
        let result = await guestService.getSubCategory(req.params.id);
       
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.post(`/publish/getCat/`, async (req, res) => {
    try {
        console.log(req.body);
        let result = await guestService.getCategoryForPublish(req.body);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})
router.post(`/publish/getCat/sub`, async (req, res) => {
    try {
        let result = await guestService.getSubCategoryForPublish(req.body);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

module.exports = router