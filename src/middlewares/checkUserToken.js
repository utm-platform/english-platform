const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config')
const { UnauthorizedError } = require('../utils/errors')

const checkUserToken = (req, res, next) => {
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
    req.user = decodedToken.user

    next()
  } catch (err) {
    next(new UnauthorizedError('Not authorized'))
  }
}

module.exports = checkUserToken