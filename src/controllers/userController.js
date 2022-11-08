const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerUser = async function (req, res) {
  try {
    let data = req.body
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data)
      res.status(201).send({ msg: savedData })
    } else {
      res.status(400).send({ msg: "invalid" })
    }

  } catch (error) {
    res.status(500).send({ status: false, message: error.message || "" })
  }

}

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId
    let password = req.body.password
    if(!userName || !password) return res.status(400).send({ msg: "invalid field or no field present" })
    let userdId = await userModel.findOne({ emailId: userName, password: password })
    if (!userdId) return res.status(404).send({ msg: "username or password isnt present" })

    let token = jwt.sign({
      user: userdId._id.toString(),
      batch: "lithium",
      org: "FunctionUp"
    }, "secret-key")
    res.setHeader("x-auth-token", token)
    res.status(200).send({ status: true, msg: token })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message || "" })
  }

}

const userDetails = async function (req, res) {
  try {
    let user = req.params.userId
    if(!user) return res.status(400).send({ msg: "userId is not present" })

    let userData = await userModel.findById(user)
    
    if (!userData) return res.status(404).send({ msg: "error no such user exist" })
    res.status(200).send({ msg: userData })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message || "" })
  }

}

const updateDetails = async function (req, res) {

  try {
    let user = req.params.userId
    if(!user) return res.status(400).send({ msg: "userId is not present" })
    let userData = await userModel.findById(user)
    
    if (!userData) return res.status(404).send({ msg: "error no such user exist" })
    let data = req.body
    let updatedData = await userModel.findOneAndUpdate({ _id: user }, data, { new: true })
    res.status(201).send({ msg: updatedData })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message || "" })
  }

}

const deleteUser = async function (req, res) {

  try {
    let user = req.params.userId
    if(!user) return res.status(400).send({ msg: "userId is not present" })
    let userData = await userModel.findById(user)

    if (!userData) return res.status(404).send({ msg: "error no such user exist" })

    let deletedUser = await userModel.findOneAndUpdate({ _id: user }, { $set: { isDeleted: true } }, { new: true })
    res.status(200).send({ msg: deletedUser })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message || "" })
  }

}

const postMessage = async function (req, res) {

  try {
    let data = req.body.msg
    if(!data) return res.status(400).send({ msg: "message is not present" })
    let user = req.params.userId
    if(!user) return res.status(400).send({ msg: "message is not present" })
    let userData = await userModel.findById(user)

    if (!userData) return res.status(404).send({ msg: "error no such user exist" })

    let updatedPosts = userData.posts
    updatedPosts.push(data)

    let message = await userModel.findOneAndUpdate({ _id: userData }, { posts: updatedPosts }, { new: true })
    res.status(201).send({ msg: message })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message || "" })
  }

}

module.exports.registerUser = registerUser
module.exports.loginUser = loginUser
module.exports.userDetails = userDetails
module.exports.updateDetails = updateDetails
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage