const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
        
    },
    isActive:{
        type: Boolean,
        default: true
    }
})

const memberModel = mongoose.model('members', memberSchema)


module.exports = memberModel

