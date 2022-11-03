const moment = require('moment/moment');
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const orderdocumentSchema = new mongoose.Schema({
    userId:{
        type: ObjectId,
        ref: "Userdocument"
    },
    productId:{
        type: ObjectId,
        ref: "Productdocument"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    Date:{
        type: String
    }
}, { timestamps: true } );

module.exports = mongoose.model('Orderdocument', orderdocumentSchema)