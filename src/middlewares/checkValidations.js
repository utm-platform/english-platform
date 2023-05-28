const { validationResult } = require('express-validator')

const checkValidations = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg)
    return res.status(400).json({ status: 400, message: errorMessages })
  }

  next()
}

module.exports = checkValidations