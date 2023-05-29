const bcrypt = require('bcrypt')

const { User } = require('../models')

const create = async user => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  const newUser = new User({ ...user, password: hashedPassword })

  return await newUser.save()
}

const getAllWithRole = async role => {
  return await User.find({ role, isActive: true })
}

const getById = async id => {
  return await User.findOne({ plate: id, isActive: true })
}

// TODO Update user
const update = async (id, user) => {
  return `This update the #${id} user with ${JSON.stringify(user)}`
}

const remove = async id => {
  return await User.findOneAndUpdate({ plate: id }, { isActive: false })
}

module.exports = {
  create,
  getAllWithRole,
  getById,
  update,
  remove,
}
