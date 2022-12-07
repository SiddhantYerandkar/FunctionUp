const express = require('express');
const router = express.Router();
const cryptoController = require("../controllers/cryptoController")



router.get("/getListOfCrypto", cryptoController.getlistOfCrypto)





module.exports = router;