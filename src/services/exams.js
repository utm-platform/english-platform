const { Exam, Question, Group } = require('../models')
const { NotFoundError, BadRequestError } = require('../utils/errors')

const generateToStudent = async ({language, studentId, teacherId}) => {

  const questions = await Question.aggregate([
    { $match: { language } },
    { $sample: { size: 25 } },
    { $sort: { section: 1, level: 1 } }
  ]).exec()

  return await Exam.create({
    language,
    questions,
    student: studentId,
    teacher: teacherId
  })
}

const generateToGroup = async ({language, teacherId, groupId}) => {
  const group = await Group.findById(groupId).populate('students')
  console.log({language, teacherId, groupId})

  if (!group) throw new NotFoundError('Group not found')

  const studentsPromises = group.students.map(async student => {
    const exam = await generateToStudent({ language, studentId: student._id, teacherId })

    return exam
  })

  const exams = await Promise.all(studentsPromises)

  return exams
}

const getAll = async () => {
  return await Exam.find().populate('questions').populate('student').populate('teacher')
}

const getById = async id => {
  return await Exam.findById(id).populate('questions').populate('student').populate('teacher')
}

const finish = async (id, answers) => {
  const exam = await Exam.findById(id)

  if (!exam) throw new NotFoundError('Exam not found')

  if (exam.isCompleted) throw new BadRequestError('Exam already completed')

  const questions = await Question.find({ _id: { $in: exam.questions } })

  const score = questions.reduce((acc, question, index) => {
    if (question.correct_answer === answers[index]) {
      return acc + 1
    }

    return acc
  }, 0)

  exam.score = score
  exam.isCompleted = true

  return await exam.save()
}

module.exports = {
  generateToStudent,
  generateToGroup,
  getAll,
  getById,
  finish
}