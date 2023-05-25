const app = require('./app')
const { PORT } = require('./config')
const connectDb = require('./database')

const startServer = async () => {
  try {
    await connectDb()
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

startServer()