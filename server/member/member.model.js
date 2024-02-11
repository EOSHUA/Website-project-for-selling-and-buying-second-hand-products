const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    parentId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'category',
        default: 0,
    }
})

const memberModel = mongoose.model('users', memberSchema)


module.exports = memberModel

