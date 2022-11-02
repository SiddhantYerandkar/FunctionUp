const { request } = require("express")

const mid1= function ( req, res, next) {
    
    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress);

    // DATE    
    let ts = Date.now()
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    console.log(year + "-" + month + "-" + date);
    // TIME
    let dt = new Date(ts)
    let hours = dt.getHours() 
    let minute = dt.getMinutes()
    let seconds = dt.getSeconds()   
    
    console.log(hours + ":" + minute + ":" + seconds );
    
    console.log(req.path);
    next()
}

module.exports.mid1= mid1
