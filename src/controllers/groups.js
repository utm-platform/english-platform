const { groupsService } = require('../services')

const create = async (req, res, next) => {
  const { name, career, teacher } = req.body

  try {
    const group = await groupsService.create({ name, career, teacher })
    res.status(201).json(group)
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res) => {
  const groups = await groupsService.getAll()

  res.json(groups)
}

const getById = async (req, res) => {
  const { id } = req.params

  const group = await groupsService.getById(id)

  res.json(group)
}

const addStudent = async (req, res, next) => {
  const { groupId, studentId } = req.params

  try {
    const group = await groupsService.addStudent(groupId, studentId)

    res.json(group)
  } catch (error) {
    next(error)
  }
}

const removeStudent = async (req, res, next) => {
  const { groupId, studentId } = req.params

  try {
    const group = await groupsService.removeStudent(groupId, studentId)

    res.json(group)
  } catch (error) {
    next(error)
  }
}

const changeTeacher = async (req, res, next) => {
  const { groupId, teacherId } = req.params

  try {
    const group = await groupsService.changeTeacher(groupId, teacherId)
    res.json(group)
  } catch (error) {
    next(error)
  }

}

const remove = async (req, res, next) => {
  const { id } = req.params

  try {
    await groupsService.remove(id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }

}

module.exports = {
  create,
  getAll,
  getById,
  addStudent,
  removeStudent,
  changeTeacher,
  remove
}