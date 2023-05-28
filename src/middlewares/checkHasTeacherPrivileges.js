const checkHasTeacherPrivileges = (req, res, next) => {
  const { role } = req.user

  if (role !== 'teacher' && role !== 'admin') {
    return res.status(403).json({ status: 403, message: 'Forbidden' })
  }

  next()
}

module.exports = checkHasTeacherPrivileges