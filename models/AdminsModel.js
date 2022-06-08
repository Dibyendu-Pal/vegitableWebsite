const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add a name"]
    },
    email: {
        type: String,
        require: [true, "Please add a email"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please add a password"]
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Admin', adminSchema)