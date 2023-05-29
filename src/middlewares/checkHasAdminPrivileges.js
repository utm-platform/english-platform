const { ForbiddenError } = require('../utils/errors')

const checkHasAdminPrivileges = (req, res, next) => {
  const { role } = req.user

  if(role !== 'admin') {
    next(new ForbiddenError('Forbidden!'))
  }

  next()
}

module.exports = checkHasAdminPrivileges