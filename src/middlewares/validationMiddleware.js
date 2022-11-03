const theMidMiddleware = function (req, res, next ){
    let acceptHeader = req.headers['isfreeappuser']
    
    if(acceptHeader) {
        next()
    } else {
        return res.send("error")
    }
    
}


module.exports.theMidMiddleware = theMidMiddleware