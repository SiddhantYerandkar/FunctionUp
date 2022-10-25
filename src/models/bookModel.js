const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    category:[ String ],
    year: {
        type: Date,
        default: Date.now
    }
},{timestamps:true})

module.exports = mongoose.model('Books', bookSchema)