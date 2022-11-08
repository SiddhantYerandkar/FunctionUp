let axios = require("axios")

let memeCreator = async function (req, res) {
    let id = req.query.username
    let pass = req.query.password
    let template = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    var options = {
        method: "post",
        url:`https://api.imgflip.com/caption_image?username=${id}&password=${pass}&template_id=${template}&text0=${text0}&text1=${text1}`
    }
    let result = await axios(options)
    res.send({msg: result.data})
}

module.exports.memeCreator = memeCreator