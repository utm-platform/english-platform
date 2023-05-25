const { Router } = require('express')

const { groupsController } = require('../controllers')

const router = Router()

router.post('/', groupsController.createGroup)

router.get('/', groupsController.getAllGroups)

router.get('/:groupId', groupsController.getGroupById)

router.delete('/:groupId', groupsController.deleteGroup)

router.post('/:groupId/students/:studentId', groupsController.addStudentToGroup)

router.post('/:groupId/teachers/:teacherId', groupsController.addTeacherToGroup)

router.delete('/:groupId/students/:studentId', groupsController.removeStudentFromGroup)

router.delete('/:groupId/teachers/:teacherId', groupsController.removeTeacherFromGroup)

module.exports = router