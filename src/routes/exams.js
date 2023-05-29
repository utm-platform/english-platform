const { Router } = require('express')
const { examsController } = require('../controllers')

const router = Router()

router.post('/', examsController.generate)

router.get('/', examsController.getAll)

router.get('/:id', examsController.getById)

router.put('/:id', examsController.finish)

module.exports = router