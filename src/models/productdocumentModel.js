const mongoose = require('mongoose');

const productdocumentSchema = new mongoose.Schema({
    name: String,
    category: String,
    price:{
        type: Number,
        required: true
    }
}, { timestamps:true } );

module.exports = mongoose.model('Productdocument', productdocumentSchema )