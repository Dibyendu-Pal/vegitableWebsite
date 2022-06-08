const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add a name"]
    },
    category: {
        type: String,
        require: [true, "Please add Category"]
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        require: [true, "Please add price"]
    }
})

module.exports = mongoose.model('Items', itemSchema)