const theMidMiddleware = function (req, res, next ){
    let acceptHeader = req.headers['isfreeappuser']
    
    if(acceptHeader) {
        if(req.headers['isfreeappuser']== "true"){
            req.body.isFreeAppUser = true
        }else{
            req.body.isFreeAppUser = false
        }
        next()
    } else {
        return res.send("error: the request is missing the mandatory header")
    }
    
}


module.exports.theMidMiddleware = theMidMiddleware