
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
        let result = await guestService.getAllItems();
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.get(`/category`, async (req, res) => {
    try {
        let result = await guestService.getCategory(parentId);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})





module.exports = router