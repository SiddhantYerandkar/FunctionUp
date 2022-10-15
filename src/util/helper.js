let printDate = function () {
    let date = new Date
    return date.getDate()
}

let printMonth = function () {
    let month = new Date
    return month.getMonth()
}

let getBatchInfo = function () {
    let batchName = 'Lithium'
    let weekDay = 'W3D5'
    return batchName + "," + weekDay + "," + " the topic for today is Nodejs module system"
}


module.exports.functionPrintDate = printDate
module.exports.functionPrintMonth = printMonth
module.exports.functionBatchInfo = getBatchInfo