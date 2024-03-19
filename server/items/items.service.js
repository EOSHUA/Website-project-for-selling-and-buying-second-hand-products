const itemsController = require('./items.controller');
const { ObjectId } = require('mongodb'); 



async function getAllItems() {
    try {
        const data = await itemsController.read({ isActive:true },{});
        return data

    } catch (err) {
        console.log(err);
    }
}

async function deleteOneItem(itemId){
   
return rmv = await itemsController.deleteItem(itemId)
}

async function getAllMyAds(memberConnected){
    try {
        
                const adds = await itemsController.read({ isActive:true ,userId:new ObjectId(memberConnected)});
                
                return adds
            } catch (err) {
                console.log(err);
            }
        }
async function creatItem(item){
    try {
        console.log("creatItem");
                const ads = await itemsController.create(item);
                
                return ads
            } catch (err) {
                console.log(err);
            }
        }
        




module.exports = { getAllItems,getAllMyAds ,creatItem,deleteOneItem}
