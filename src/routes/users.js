const { Router } = require('express')
const { body } = require('express-validator')

const { usersController } = require('../controllers')
const { checkValidations, checkHasAdminPrivileges, checkUserToken, checkHasTeacherPrivileges } = require('../middlewares')

const router = Router()

router.post('/',
  checkUserToken,
  checkHasAdminPrivileges,
  body('name').trim().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('lastName').trim().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
  body('email').trim().isEmail().withMessage('Email is not a valid email'),
  body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  checkValidations,
  usersController.createUser
)

router.get('/students',
  checkUserToken,
  checkHasTeacherPrivileges,
  usersController.getAllStudents
)

router.get('/teachers',
  checkUserToken,
  checkHasAdminPrivileges,
  checkValidations,
  usersController.getAllTeachers
)

router.get('/admins',
  checkUserToken,
  checkHasAdminPrivileges,
  checkValidations,
  usersController.getAllAdmins
)

router.get('/:id',
  checkUserToken,
  checkHasAdminPrivileges,
  usersController.getUserById
)

router.delete('/:id',
  checkUserToken,
  checkHasAdminPrivileges,
  usersController.deleteUser
)

module.exports = router