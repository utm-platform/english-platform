// eslint-disable-next-line no-unused-vars
const handleErrors = (err, req, res, next) => {
  if(err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(err => err.message)

    return res.status(400).json({ status: 400, message: messages })
  }

  if(err.code === 11000) {
    const value = Object.keys(err.keyValue)
    const message = `Duplicate ${value} field: ${err.keyValue[value]}`

    return res.status(400).json({ status: 400, message })
  }

  res.status(500).json({ status: 500, message: err.message })
}

module.exports = handleErrors