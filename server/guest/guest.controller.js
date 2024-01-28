const guestModel = require('./category.model')

async function create(data) {
    return await userModel.create(data)
}

async function read() {
    return data = await guestModel.find({ parentId: { $exists: !true } })
}

async function readOne(filter = {}) {
    return await userModel.findOne(filter)
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


