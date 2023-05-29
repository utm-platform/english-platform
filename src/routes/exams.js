const { Router } = require('express')
const { examsController } = require('../controllers')
const { checkHasTeacherPrivileges, checkUserToken } = require('../middlewares')

const router = Router()

router.post('/',
  checkUserToken,
  checkHasTeacherPrivileges,
  examsController.generateToStudent
)

router.post('/groups/:id',
  checkUserToken,
  checkHasTeacherPrivileges,
  examsController.generateToGroup
)

router.get('/',
  checkUserToken,
  checkHasTeacherPrivileges,
  examsController.getAll
)

router.get('/:id',
  checkUserToken,
  checkHasTeacherPrivileges,
  examsController.getById
)

router.put('/:id',
  checkUserToken,
  examsController.finish
)

module.exports = router