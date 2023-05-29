const { Group, User } = require('../models')
const { NotFoundError, BadRequestError } = require('../utils/errors')

const create = async (group) => {
  const teacher = await User.findById(group.teacher)

  if (!teacher) {
    throw new NotFoundError('Teacher not found!')
  }

  if(teacher.role !== 'teacher' && teacher.role !== 'admin') {
    throw new BadRequestError('The user is not a teacher!')
  }

  return await Group.create(group)
}

const getAll = async () => {
  return await Group.find().populate('teacher').populate('students')
}

const getById = async (id) => {
  return await Group.findById(id).populate('teacher').populate('students')
}

const addStudent = async (groupId, studentId) => {
  const student = await User.findById(studentId)

  if (!student) {
    throw new NotFoundError('Student not found!')
  }

  const group = await Group.findById(groupId).populate('teacher').populate('students')

  if (!group) {
    throw new NotFoundError('Group not found!')
  }

  if (group.students.includes(studentId)) {
    throw new BadRequestError('Student already in group!')
  }

  group.students.push(studentId)

  return await group.save()
}

const removeStudent = async (groupId, studentId) => {
  const student = await User.findById(studentId)

  if (!student) {
    throw new NotFoundError('Student not found!')
  }

  const group = await Group.findById(groupId).populate('teacher').populate('students')

  if (!group) {
    throw new NotFoundError('Group not found!')
  }

  if (!group.students.some(student => student._id.toString() === studentId)) {
    throw new BadRequestError('Student not in group!')
  }

  group.students = group.students.filter(student => student._id.toString() !== studentId)

  return await group.save()
}

const changeTeacher = async (groupId, teacherId) => {
  const teacher = await User.findById(teacherId)

  if (!teacher) {
    throw new NotFoundError('Teacher not found!')
  }

  if(teacher.role !== 'teacher' && teacher.role !== 'admin') {
    throw new BadRequestError('The user is not a teacher!')
  }

  const group = Group.findById(groupId).populate('teacher').populate('students')

  if (!group) {
    throw new NotFoundError('Group not found!')
  }

  if(group.teacher === teacherId) {
    throw new BadRequestError('Teacher already in group!')
  }

  group.teacher = teacherId

  return await group.save()
}

const remove = async (id) => {
  const group = await Group.findById(id)

  if (!group) {
    throw new NotFoundError('Group not found!')
  }

  return await Group.findByIdAndDelete(id)
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