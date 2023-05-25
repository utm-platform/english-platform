const mongoose = require('mongoose')
const { DB_URI } = require('./config')

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error.message)
  }
}

module.exports = connectDb