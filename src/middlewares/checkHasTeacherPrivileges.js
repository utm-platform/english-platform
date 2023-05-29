const { ForbiddenError } = require('../utils/errors')

const checkHasTeacherPrivileges = (req, res, next) => {
  const { role } = req.user

  if (role !== 'teacher' && role !== 'admin') {
    next(new ForbiddenError('Forbidden!'))
  }

  next()
}

module.exports = checkHasTeacherPrivileges