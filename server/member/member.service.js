
const memberController = require('./member.controller');
const { ObjectId } = require('mongodb'); 


async function getMember(e) {
   
        const data = await memberController.read({ isActive: true , userName: e.userName_ ,password:e.password_ });
        
        if (data.length<1) throw { code: 404,msg:"user not found", data: "user not found" }
        return data
   
   
}

// async function getAllCategoris() {
//     try {
//         const data = await memberController.read({ parentId: { $exists: !true } });
//         return data

//     } catch (err) {
//         console.log(err);
//     }
// }

// async function getSubCategory(parentId) {
//     try {
//         const data = await memberController.read({parentId: new ObjectId(parentId) });
//         console.log(data);
//         return data;
//     } catch (err) {
//         console.log(err);
//     }
// }

async function addMember(data) {
    // validation 
    if (!data?.userName_) throw { code: 400,msg:"username input error", data: "username input error" }
    if (!data?.email_) throw { code: 400,msg:"email input error", data: "email input error" }
    if (!data?.password_) throw { code: 400,msg:"password input error", data: "password input error" }

    // if email exist
    let user = await memberController.readOne({ email: data.email_ })
    if (user) throw { code: 450, msg:"email is already used" ,data: "email is already used" }
    
    // map to object (by schema)
    let newUserMapped = await handleValidation(data)
    let result = await memberController.create(newUserMapped)
    if (result) throw {code:200,msg:"User has successfully registered",data:"User has successfully registered"};
    return result
}

async function handleValidation(reqBody) {
    if((reqBody.userName_.length < 4)) throw { code: 450,msg:"userName isn't long enough" , data:"userName isn't long enough" }
    if((reqBody.password_.length < 7)) throw { code: 450, msg:"password isn't long enough" ,data: "password isn't long enough" }
    return {
        userName: reqBody.userName_,
        email: reqBody.email_,
        password: reqBody.password_
    }
}

    module.exports = {addMember,getMember}