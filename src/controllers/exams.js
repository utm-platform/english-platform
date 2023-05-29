const { examsService } = require('../services')

const generate = async (req, res, next) => {
  const { language, studentId, teacherId } = req.body

  try {
    const exam = await examsService.generate({ language, studentId, teacherId })

    return res.status(200).json(exam)
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
  generate,
  getAll,
  getById,
  finish
}