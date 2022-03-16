const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String
    },
    negotiable: {
        type: Boolean,
        default: false
    },
    image: {
        type: Buffer
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task