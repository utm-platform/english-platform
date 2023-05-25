const { Router } = require('express')

const groups = require('./groups')
const users = require('./users')

const router = Router()

router.use('/groups', groups)
router.use('/users', users)

module.exports = router