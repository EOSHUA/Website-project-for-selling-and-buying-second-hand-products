const guestModel = require('./items.model')


async function read(filter = {}) {
    return data = await guestModel.find(filter)
}
async function create(add) {
    
    const item={
    idCategory:add.category,
    idSubCategory:add.subCategory,
    userId:add.userId,
    city:add.city,
    description:add.description,
    productStatus:add.productStatus,
    image:add.image,
    name:add.name,
    


} 
const data=await guestModel.create(item)
return data;
}
async function deleteItem(filter = {}) {
    
    try {
        console.log(filter);
        const result = await guestModel.updateOne(
            { _id: filter }, // Assuming 'filter' contains the ID of the document to update
            { $set: { isActive: false } } // Set the 'isActive' field to false
        );

        return result; // Return the result of the update operation
    } catch (error) {
        // Handle any errors that occur during the update operation
        console.error("Error deleting item:", error);
        throw error; // Re-throw the error to be handled by the caller
    }   
}

module.exports = {read, create,deleteItem}