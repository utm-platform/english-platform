const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const auth = require('./routes/auth')
const routes = require('./routes')
const { NODE_ENV } = require('./config')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'))

app.use('/api', routes)
app.use('/auth', auth)

module.exports = app