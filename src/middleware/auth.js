const tokenAuth =  function(req, res, next){
    let acceptHeader = req.headers["x-auth-token"]

    if(!acceptHeader){
        return res.send({msg:"the request is missing mandatory header"})
    }else{
        next()
    }
}

module.exports.tokenAuth = tokenAuth