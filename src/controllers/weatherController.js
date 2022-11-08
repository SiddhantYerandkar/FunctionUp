let axios = require("axios")


let getWeather = async function (req, res) {
    try {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=44a35b81057a2804103037dac47880db`
        }
        let result = await axios(options)
        res.send({ msg: result.data })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }

}

let getTemperature = async function (req, res) {
    try {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=44a35b81057a2804103037dac47880db`
        }
        let result = await axios(options)
        res.send({ Temp: result.data.main.temp })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

let sortCities = async function (req, res) {
    try {
        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newArr = []
        for (let i = 0; i < city.length; i++) {
            let obj = {city: city[i]}
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=44a35b81057a2804103037dac47880db`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            newArr.push(obj)
        }
        newArr.sort(function (a,b) {return a.temp-b.temp})
        res.send({msg: newArr})
    } catch (error) {
        res.send({ msg: error.message })
    }
}

module.exports.getWeather = getWeather
module.exports.getTemperature = getTemperature
module.exports.sortCities = sortCities