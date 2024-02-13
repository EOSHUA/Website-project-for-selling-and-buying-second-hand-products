const guestModel = require('./category.model')

async function create(data) {
    return await guestModel.create(data)
}

async function read(filter = {}) {
    return data = await guestModel.find(filter)
}

async function readOne(filter = {}) {
    return await guestModel.findOne(filter)
}

async function update(filter, data) {
    return await guestModel.updateOne(filter, data);
}
async function updateById(id, data) {
    return await guestModel.updateOne({ _id: id }, data);
}

async function del(id) {
    return await updateById(id, { isActive: false })
}

module.exports = { create, read, readOne, update, updateById, del }


