const jwt = require("jsonwebtoken");

const tokenAuth =  function(req, res, next){
    let token = req.headers["x-auth-token"]

    if(!token){
        return res.send({msg:"the request is missing mandatory header"})
    }
    
    let decodedToken = jwt.verify(token, "functionup-lithium-very-very-secret-key");

    if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
    }

    next()
}

module.exports.tokenAuth = tokenAuth