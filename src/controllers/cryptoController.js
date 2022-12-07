let axios = require('axios')
const coinModel = require('../models/coinModel')

let getlistOfCrypto = async function (req, res) {
    try {
        var options = {
            method: 'get',
            url: 'http://api.coincap.io/v2/assets',
            Headers: {
                'Authorization': 'Bearer 6d9f484c-f6df-433d-a963-914eee35650a'
            }
        }
        let result = await axios(options)

        let resultData = result.data

        for (let i = 0; i < resultData.data.length; i++) {
            let data = {}
            data.symbol = resultData.data[i].symbol
            data.name = resultData.data[i].name
            data.marketCapUsd = resultData.data[i].marketCapUsd
            data.priceUsd = resultData.data[i].priceUsd
            let createData = await coinModel.findOneAndUpdate(
                { $and: [{ symbol: data.symbol }, { name: data.name }] },
                {
                    symbol: data.symbol,
                    name: data.name,
                    marketCapUsd: data.marketCapUsd,
                    priceUsd: data.marketCapUsd
                },
                { upsert: true }
            )
        }
        let sortedData = resultData.data.sort(function (a, b) { return b.changePercent24Hr - a.changePercent24Hr })
        res.send({ msg: sortedData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports.getlistOfCrypto = getlistOfCrypto