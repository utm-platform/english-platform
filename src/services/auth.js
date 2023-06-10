const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = require('../models')
const { JWT_SECRET, JWT_REFRESH_SECRET } = require('../config')
const { BadRequestError } = require('../utils/errors')

const login = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) throw new BadRequestError('Invalid email or password')

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) throw new BadRequestError('Invalid email or password')

  const payload = { sub: user.id, ...user }
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' })

  const credentials = {
    accessToken,
    refreshToken,
    _id: user._id,
    plate: user.plate,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
  }

  return credentials
}

module.exports = {
  login,
}
