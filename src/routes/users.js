const { Router } = require('express')

const { usersController } = require('../controllers')

const router = Router()

router.post('/', usersController.createUser)

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.get('/role/:role', usersController.getAllWithRole)

router.delete('/:userId', usersController.deleteUser)

module.exports = router