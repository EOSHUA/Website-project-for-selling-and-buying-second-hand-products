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
async function getAllMyAds(){
    try {
                const ads = await itemsController.read({ isActive:true });
                return ads
            } catch (err) {
                console.log(err);
            }
        }


module.exports = { getAllItems,getAllMyAds }
