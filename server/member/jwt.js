const {sign,verify} =require("jsonwebtoken");

require('dotenv').config()
 const createToken=(user)=>{
    const secret=require('crypto').randomBytes(64).toString('hex');
    const accessToken = sign({userName: user.name, id: user.id},process.env.ACCESS_TOKEN)
    res.json({accessToken:accessToken})
 }


 module.exports= createToken