const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = require('../models')
const { JWT_SECRET } = require('../config')

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email })

    if (!user) throw new Error('Invalid email or password')

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) throw new Error('Invalid email or password')

    const payload = { sub: user.id, user }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })

    return { token }
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  loginService
}