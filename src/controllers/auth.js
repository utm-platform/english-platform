const { authService } = require('../services')

const login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const { token } = await authService.loginService(email, password)

    return res.status(200).json({ token })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  login
}