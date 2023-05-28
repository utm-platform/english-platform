const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config')

const checkUserToken = (req, res, next) => {
  const { authorization } = req.headers

  if(!authorization) {
    return res.status(401).json({ status: 401, message: 'Token not found' })
  }

  const [, token] = authorization.split(' ')

  if(!token) {
    return res.status(401).json({ status: 401, message: 'Token not found' })
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET)
    req.user = decodedToken.user

    next()
  } catch (err) {
    return res.status(401).json({ status: 401, message: 'Invalid token' })
  }
}

module.exports = checkUserToken