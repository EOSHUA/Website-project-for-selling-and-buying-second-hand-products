const guestModel = require('./items.model')

async function read(filter = {}) {
    return data = await guestModel.find(filter)
}

module.exports = {read}