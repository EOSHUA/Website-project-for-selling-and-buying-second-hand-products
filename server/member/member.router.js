
const express = require('express'),
router = express.Router();

const memberService = require('./member.service')

router.post('/login',async (req,res)=>{
    try{
        
        let result = await memberService.getMember(req.body.member);
        
        res.send(result)
    }
    catch(err){
        console.log(err);
        res.status(err?.code ?? 404).send(err?.msg)
    }
})

router.post('/signIn',async (req,res)=>{
    try{
        let result = await memberService.addMember(req.body.newuser);
        res.send(result) 
    }
    catch(err){
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

router.post('/deleteMember', async (req, res) => {
    try {
        let result = await memberService.deleteMember(req.body.userId);
        res.send(result)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})

module.exports = router