const { authService } = require('../services')

const login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const credentials = await authService.login(email, password)

    res.status(200).json(credentials)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  login,
}