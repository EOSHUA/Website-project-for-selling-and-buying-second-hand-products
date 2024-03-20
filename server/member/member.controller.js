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

async function deleteMember(userid) {
    console.log(userid);
    return await memberModel.updateOne({_id:userid}, { isActive: false })
}

module.exports = { create, read, readOne, update, updateById, deleteMember }


