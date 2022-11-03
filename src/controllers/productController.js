const productModel = require("../models/productdocumentModel")
const userDocumentModel = require("../models/userdocumentModel")
const orderModel = require("../models/orderdocumentModel")

const createProduct = async function (req, res) {
    let data = req.body
    let savedData = await productModel.create(data)

    res.send({msg: savedData})
}

const createUserDocument = async function (req, res) {
    let data = req.body
    let savedData = await userDocumentModel.create(data)

    res.send(savedData)
}

const createOrder = async function (req, res){
    let data = req.body
    let idValue = data.userId
    let productValue = data.productId

    if(!idValue) return res.send({msg: 'userId is mandatory'})
    if(!productValue) return res.send({msg: 'productId is mandatory' })

    let savedData = await orderModel.create(data)

    res.send(savedData)
}


module.exports.createProduct = createProduct
module.exports.createUserDocument = createUserDocument
module.exports.createOrder = createOrder