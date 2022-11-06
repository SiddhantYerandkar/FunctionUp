const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerUser = async function (req, res){
  let data = req.body
  let savedData = await userModel.create(data)
  res.send({msg: savedData})
}

const loginUser = async function (req, res) {
  let userName = req.body.emailId
  let password = req.body.password

  let userdId = await userModel.findOne({emailId: userName, password: password})  
  if(!userdId) return res.send({msg:"username or password isnt present"})

  let token = jwt.sign({
    user: userdId._id.toString(),
    batch: "lithium",
    org: "FunctionUp"
  }, "secret-key" )
  res.setHeader("x-auth-token", token)
  res.send({status: true, msg: token })
}

const userDetails = async function (req, res) {
  let user = req.params.userId
  let userData = await userModel.findById(user)

  if(!userData) return res.send({msg:"error no such user exist"})
  res.send({msg: userData })
}

const updateDetails = async function (req, res) {
  let user = req.params.userId
  let userData = await userModel.findById(user)

  if(!userData) return res.send({msg:"error no such user exist"})
  let data = req.body
  let updatedData = await userModel.findOneAndUpdate({_id: user}, data, {new: true})
  res.send({msg: updatedData})
}

const deleteUser = async function (req, res){
  let user = req.params.userId
  let userData = await userModel.findById(user)

  if(!userData) return res.send({msg:"error no such user exist"})

  let deletedUser = await userModel.findOneAndUpdate({_id: user}, {$set:{isDeleted: true}}, {new: true})
  res.send({msg: deletedUser})

}

const postMessage = async function (req, res) {
  let data = req.body.msg
  let user = req.params.userId
  let userData = await userModel.findById(user)

  if(!userData) return res.send({msg:"error no such user exist"})

  let updatedPosts = userData.posts
  updatedPosts.push(data)

  let message = await userModel.findOneAndUpdate({_id: userData}, {posts: updatedPosts }, {new: true} )
  res.send({msg: message})
}

module.exports.registerUser = registerUser
module.exports.loginUser = loginUser
module.exports.userDetails = userDetails
module.exports.updateDetails = updateDetails
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage