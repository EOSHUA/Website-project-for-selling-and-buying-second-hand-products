
const express = require('express'),
router = express.Router();

const memberService = require('./member.service')

router.post('/login',async (req,res)=>{
    try{
        let result = await userService.getMember(req.body);
        res.send(result)
    }
    catch(err){
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.post('/signIn',async (req,res)=>{
    try{
        let result = await userService.addMember(req.body);
        res.send(result)
    }
    catch(err){
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.get('/getMyAds', async (req, res) => {
    try {
        let result = await memberService.getAllAds();
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.delete('/deleteAd', async (req, res) => {
    try {
        let result = await memberService.deleteAd();
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.post(`/publishAd`, async (req, res) => {
    try {
        let result = await memberService.publishAd(req.body);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.post(`/updateAd`, async (req, res) => {
    try {
        let result = await memberService.updateAd(req.body);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.post(`/updateDetailsMemberDetails`, async (req, res) => {
    try {
        let result = await memberService.updateDetailsMemberDetails(req.body);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

router.delete('/deleteMember', async (req, res) => {
    try {
        let result = await memberService.deleteMember();
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

module.exports = router