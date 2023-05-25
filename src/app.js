const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const listEndpoints = require('express-list-endpoints')

const auth = require('./routes/auth')
const routes = require('./routes')
const { NODE_ENV } = require('./config')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'))

app.use('/api', routes)
app.use('/auth', auth)

listEndpoints(app).forEach(route => {
  route.methods.forEach(method => {
    console.log(`${method.toUpperCase()}\t ${route.path}`)
  })
})

module.exports = app