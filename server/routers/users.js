const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const { authorizationRegister } = require('../middlewares/authorization')

router.post('/register', authorizationRegister, UserController.register)
router.post('/login', UserController.login)

module.exports = router