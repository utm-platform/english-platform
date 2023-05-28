const { usersService } = require('../services')

const createUser = async (req, res) => {
  const { plate, name, email, password, passwordConfirmation, lastName, role } = req.body

  if(password !== passwordConfirmation) {
    return res.status(400).json({ status: 400, message: 'Passwords do not match' })
  }

  try {
    const user = await usersService.create({ plate, name, email, password, lastName, role })

    return res.status(201).json(user)
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message })
  }
}

const getAllStudents = async (req, res) => {
  const users = await usersService.getAllWithRole('student')

  res.json(users)
}

const getAllTeachers = async (req, res) => {
  const users = await usersService.getAllWithRole('teacher')

  res.json(users)
}

const getAllAdmins = async (req, res) => {
  const users = await usersService.getAllWithRole('admin')

  res.json(users)
}

const getUserById = async (req, res) => {
  const { id } = req.params

  const user = await usersService.getById(id)

  if(!user) {
    return res.status(404).json({ status: 404, message: 'User not found' })
  }

  res.json(user)
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  const user = await usersService.remove(id)

  if(!user) {
    return res.status(404).json({ status: 404, message: 'User not found' })
  }

  res.json(user)
}

module.exports = {
  createUser,
  getAllStudents,
  getAllTeachers,
  getAllAdmins,
  getUserById,
  deleteUser
}