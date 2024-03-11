const guestModel = require('./items.model')

async function read(filter = {}) {
    return data = await guestModel.find(filter)
}
async function create(add) {
    console.log(add);
    const item={
    idCategory:add.idCategory,
    idSubCategory:add.idSubCategory,
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

module.exports = {read, create}