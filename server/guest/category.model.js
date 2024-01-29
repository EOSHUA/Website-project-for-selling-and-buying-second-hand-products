const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
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

const guestModel = mongoose.model('categories', categorySchema)


module.exports = guestModel

