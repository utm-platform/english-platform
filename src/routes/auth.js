const { Router } = require('express')
const { listRoutes } = require('../utils')
const { authController } = require('../controllers')

const router = Router()

router.post('/login', authController.login)

listRoutes(router, '/auth')

module.exports = router