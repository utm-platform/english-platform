const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config')
const { UnauthorizedError } = require('../utils/errors')
const { User } = require('../models')

const checkUserToken = async (req, res, next) => {
  const { authorization } = req.headers

  if(!authorization) {
    next(new UnauthorizedError('No Authorization header found'))
  }

  const [, token] = authorization.split(' ')

  if(!token) {
    next(new UnauthorizedError('No token found'))
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET)

    const user = await User.findById(decodedToken.sub)

    if(!user) {
      next(new UnauthorizedError('Invalid token'))
    }

    req.user = user

    next()
  } catch (err) {
    next(new UnauthorizedError('Not authorized'))
  }
}

module.exports = checkUserToken