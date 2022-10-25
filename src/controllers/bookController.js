const bookModel = require("../models/bookModel")

const createNewBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg : savedData })
}

const listOfBooks = async function(req, res){
    let booksList = await bookModel.find()
    res.send({ msg : booksList })
}

module.exports.createNewBook = createNewBook
module.exports.listOfBooks = listOfBooks