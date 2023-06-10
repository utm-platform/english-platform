const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  language: {
    type: String,
    required: true,
    enum: {
      values: ['en', 'fr'],
      message: 'The value {VALUE} is not valid for language field'
    }
  },
  question: {
    type: String,
    required: true
  },
  answers: {
    type: [Object],
    required: true
  },
  correct_answer: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  level: {
    type: String
  }
})

questionSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v
    delete ret.correct_answer
  }
})

module.exports = model('Question', questionSchema)