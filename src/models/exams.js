const { Schema, model, Types } = require('mongoose')

const examSchema = new Schema({
  language: {
    type: String,
    required: true,
    enum: {
      values: ['en', 'fr'],
      message: 'The value {VALUE} is not valid for language field'
    }
  },
  questions: {
    type: [Types.ObjectId],
    ref: 'Question',
  },
  student: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  teacher: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
})

examSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v
  }
})

module.exports = model('Exam', examSchema)