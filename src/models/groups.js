const { Schema, model, Types } = require('mongoose')

const requiredMessage = '{PATH} is required!'

const groupSchema = new Schema({
  name: {
    type: String,
    required: requiredMessage
  },
  career: {
    type: String,
    required: requiredMessage
  },
  teacher: {
    type: Types.ObjectId,
    ref: 'User',
    required: requiredMessage
  },
  students: {
    type: [Types.ObjectId],
    ref: 'User'
  }
})

groupSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v
  }
})

module.exports = model('Group', groupSchema)