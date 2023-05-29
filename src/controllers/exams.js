const { examsService } = require('../services')

const generateToStudent = async (req, res, next) => {
  const { language, studentId } = req.body
  const { id: teacherId } = req.user

  try {
    const exam = await examsService.generateToStudent({ language, studentId, teacherId })

    return res.status(201).json(exam)
  } catch (err) {
    next(err)
  }
}

const generateToGroup = async (req, res, next) => {
  const { language } = req.body
  const { _id: teacherId } = req.user
  const { id: groupId } = req.params

  try {
    const exam = await examsService.generateToGroup({ language, teacherId, groupId })

    return res.status(201).json(exam)
  } catch (err) {
    next(err)
  }
}

const getAll = async (req, res, next) => {
  try {
    const exams = await examsService.getAll()

    return res.status(200).json(exams)
  } catch (err) {
    next(err)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params

  try {
    const exam = await examsService.getById(id)

    return res.status(200).json(exam)
  } catch (err) {
    next(err)
  }
}

const finish = async (req, res, next) => {
  const { id } = req.params
  const { answers } = req.body

  try {
    const exam = await examsService.finish(id, answers)

    return res.status(200).json(exam)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  generateToStudent,
  generateToGroup,
  getAll,
  getById,
  finish
}