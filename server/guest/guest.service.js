
const guestController = require('./guest.controller');
const { ObjectId } = require('mongodb'); 



async function getAllCategoris() {

    try {
        const data = await guestController.read({ parentId: { $exists: !true } });
        return data

    } catch (err) {
        console.log(err);
    }
}

async function getSubCategory(parentId) {
    try {

        const data = await guestController.read({parentId: new ObjectId(parentId) });
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getCategoryForPublish(e) {
    try {
        const data = await guestController.read({
            $and: [
              { category: { $regex: e.cat, $options: "i" } },
              { parentId: { $exists: false } },
              {isActive:true}
            ]
          });
          console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getSubCategoryForPublish(e) {
    try {
        const parentId =await getCategoryForPublish(e)
        const data = await getSubCategory(parentId[0]._id);
        // const data = await guestController.read({
        //     $and: [
        //       { sub: { $regex: e.cat, $options: "i" } },
        //       { parentId: { $exists: false } },
        //       {isActive:true}
        //     ]
        //   });
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function findIds(e) {
    try {
        console.log();
   const data=await guestController.read({category: e.subCategoryName});
   return data;
    } catch (err) {
        console.log(err);
    }
}



// async function addNewUser(data) {

//     // validation 
//     if (!data?.email) throw { code: 400, msg: "email input error" }

//     // if email exist
//     let user = await userController.readOne({ email: data.email })
//     if (user) throw { code: user.isActive ? 400 : 450, msg: "user is exist" }

//     // map to object (by schema)
//     let newUserMapped = await handleValidation(data)

//     let result = await userController.create(newUserMapped)
//     return result
// }


// async function handleValidation(reqBody) {
//     // password > 6 digits /  a-z + numbers

//     return {
//         fName: reqBody.fName,
//         lName: reqBody.lName,
//         email: reqBody.email,
//         password: reqBody.password
//     }
// }


// const starter = async () => {
//         const db = require('../DL/db')
//         await db.connect()
    
//         // let result = await create(user)
//         // let result = await read()
//         // let result = await readOne({email: 'haim_l@gmail.com'})
//         // let result = await updateById("65ad3e4a6e93ef4bb31c6df6", {password: 'Aa123456'})
//         // let result = await del("65ad3e4a6e93ef4bb31c6df6")
    
    
//         let reqBody = {
//                 "fName": "haim",
//                 "lName": "levi",
//                 "email": "haim_l@gmail.com",
//                 "password": "32saw2",
        
//                 "permission": "admin",
//                 "key": "fetch('myUrlServer',{...localStorage})"
//             }
        
//     let result = await addNewUser(reqBody)
//     console.log("result", result);

//     // result.forEach(u => console.log(u.email, u.lName, u.fName))
// }

// starter()

// let user = {
//         fName: "haim",
//         lName: "levi",
//         email: "haim_l@gmail.com",
//         password: "32saw2"
//     }
    
    
    
    module.exports = { getAllCategoris , getSubCategory,getCategoryForPublish ,getSubCategoryForPublish,findIds}