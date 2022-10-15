let trimFunction = function () {
    let str = ' functionUp  '
    return str.trim()
}

let changeToLowerCase = function () {
   let str = 'FUNCTIONUP' 
   return str.toLowerCase()
}

let changeToUpperCase = function () {
    let str = 'functionup'
    return str.toUpperCase()
}


module.exports.trimFun = trimFunction
module.exports.lowerCase = changeToLowerCase
module.exports.upperCase = changeToUpperCase