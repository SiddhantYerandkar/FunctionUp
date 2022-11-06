const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"]

    if(!token) {
        return res.send({msg:"token must be present"})
    }
    let decodedToken = jwt.verify(token, "secret-key" )
    if(!decodedToken) {return res.send({msg:"token is invalid"})
    }
    userLoggedIn = decodedToken.user
    next()
}


const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let user = req.params.userId
    
    if(user !== userLoggedIn) { 
        return res.send({msg:"you dont have access"})
    } 
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise