const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require('../middleware/auth')

router.post("/registerUser", userController.registerUser)
router.post("/loginUser", userController.loginUser)

router.get("/users/:userId", auth.authenticate, auth.authorise, userController.userDetails )

router.put("/users/:userId", auth.authenticate, auth.authorise, userController.updateDetails )

router.delete("/users/:userId", auth.authenticate, auth.authorise, userController.deleteUser )

router.post('/users/:userId/posts', auth.authenticate,auth.authorise, userController.postMessage)

module.exports = router;