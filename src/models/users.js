const { Schema, model } = require('mongoose')

const requiredMsg = '{PATH} is required!'

const userSchema = new Schema({
  plate: {
    type: String,
    required: requiredMsg,
    unique: true
  },
  name: {
    type: String,
    required: requiredMsg,
  },
  lastName: {
    type: String,
    required: requiredMsg
  },
  email: {
    type: String,
    required: requiredMsg,
    unique: true
  },
  password: {
    type: String,
    required: requiredMsg
  },
  role: {
    type: String,
    default: 'student',
    enum: {
      values: ['admin', 'student', 'teacher'],
      message: 'The value {VALUE} is not valid for role field'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password
    delete ret.__v
    delete ret.isActive
  }
})

module.exports = model('User', userSchema)