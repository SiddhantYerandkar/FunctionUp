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

    let productId = await productModel.findById(productValue)
    let userId = await userDocumentModel.findById(idValue)

    if(!idValue) return res.send({msg: "userId is mandatory"})
    if(!userId) return res.send({msg : "enter valid userId" })

    if(!productValue) return res.send({msg: "productId is mandatory" })
    if(!productId) return res.send({msg: "enter valid productId"})

    let isFreeApp = req.headers['isfreeappuser']
    
    let productPrice = productId.price

    let userBalance = userId.balance

    if(isFreeApp == "true"){
        data["amount"] = 0
        let saved = await orderModel.create(data)
        return res.send({msg: saved})
    }else{
        if( userBalance > productPrice ){
            let updatedBalance = userBalance - productPrice
            let newbalance = await userDocumentModel.findOneAndUpdate(
                {_id: userId },
                { $set: { balance: updatedBalance} }
            )
            
            let savedData = await orderModel.create(data)
            return res.send(savedData)

        } else{
            return res.send({msg: "user dont have enough balance"})
        }

    }

}


module.exports.createProduct = createProduct
module.exports.createUserDocument = createUserDocument
module.exports.createOrder = createOrder