const { Router } = require('express')

const { groupsController } = require('../controllers')
const { checkUserToken, checkHasAdminPrivileges, checkValidations } = require('../middlewares')
const { body } = require('express-validator')

const router = Router()

router.post('/',
  checkUserToken,
  checkHasAdminPrivileges,
  body('name').trim().isLength({ min: 3 }).withMessage('Group name must be at least 3 characters long'),
  body('career').trim().isLength({ min: 3 }).withMessage('Career must be at least 3 characters long'),
  body('teacher').trim().exists().withMessage('Teacher is required'),
  checkValidations,
  groupsController.create
)

router.get('/',
  checkUserToken,
  checkHasAdminPrivileges,
  groupsController.getAll
)

router.get('/:id',
  checkUserToken,
  checkHasAdminPrivileges,
  groupsController.getById
)

router.delete('/:id',
  checkUserToken,
  checkHasAdminPrivileges,
  groupsController.remove
)

router.post('/:groupId/students/:studentId',
  checkUserToken,
  checkHasAdminPrivileges,
  groupsController.addStudent
)

router.patch('/:groupId/teachers/:teacherId',
  checkUserToken,
  checkHasAdminPrivileges,
  groupsController.changeTeacher
)

router.patch('/:groupId/students/:studentId',
  checkUserToken,
  checkHasAdminPrivileges,
  groupsController.removeStudent
)

module.exports = router