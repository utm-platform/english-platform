const { Router } = require('express')

const exams = require('./exams')
const groups = require('./groups')
const users = require('./users')

const router = Router()

router.use('/exams', exams)
router.use('/groups', groups)
router.use('/users', users)

module.exports = router