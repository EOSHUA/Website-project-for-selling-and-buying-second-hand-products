const memberModel = require('./member.model')

async function create(data) {
    return await memberModel.create(data)
}

async function read(filter = {}) {
    return data = await memberModel.find(filter)
}

async function readOne(filter = {}) {
    return await memberModel.findOne(filter)
}

async function update(filter, data) {
    return await memberModel.updateOne(filter, data);
}
async function updateById(id, data) {
    return await memberModel.updateOne({ userName: id }, data);
}

async function del(id) {
    return await updateById(id, { isActive: false })
}

module.exports = { create, read, readOne, update, updateById, del }


