const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = require('../models')
const { JWT_SECRET } = require('../config')
const { BadRequestError } = require('../utils/errors')

const loginService = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) throw new BadRequestError('Invalid email or password')

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) throw new BadRequestError('Invalid email or password')

  const payload = { sub: user.id, user }
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })

  return { token }
}

module.exports = {
  loginService,
}
