const { Exam, Question, Group } = require('../models')
const { NotFoundError, BadRequestError } = require('../utils/errors')

const generateToStudent = async ({ language, studentId, teacherId }) => {
  const questions = await Question.aggregate([
    { $match: { language } },
    { $sample: { size: 25 } },
    { $sort: { section: 1, level: 1 } },
  ]).exec()

  const exam = await Exam.create({
    language,
    questions,
    student: studentId,
    teacher: teacherId,
  })

  return await Exam.populate(exam, [
    { path: 'questions', model: 'Question' },
    { path: 'student', model: 'User' },
    { path: 'teacher', model: 'User' },
  ])
}

const generateToGroup = async ({ language, teacherId, groupId }) => {
  const group = await Group.findById(groupId).populate('students')

  if (!group) throw new NotFoundError('Group not found')

  const studentsPromises = group.students.map(async student => {
    const exam = await generateToStudent({ language, studentId: student._id, teacherId })

    return exam
  })

  const exams = await Promise.all(studentsPromises)

  return exams
}

const getAll = async () => {
  return await Exam.find().populate('student').populate('teacher')
}

const getById = async id => {
  return await Exam.findById(id).populate('questions').populate('student').populate('teacher')
}

const finish = async (id, answers) => {
  const exam = await Exam.findById(id).populate('questions')

  if (!exam) throw new NotFoundError('Exam not found')

  if (exam.isCompleted) throw new BadRequestError('Exam already completed')

  const score = exam.questions.reduce((counter, question, index) => {
    if (question.correct_answer === answers[index]) {
      return counter + 1
    }
    return counter
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
  finish,
}
