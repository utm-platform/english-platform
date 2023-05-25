require('dotenv').config()

const { DB_URI, NODE_ENV, PORT } = process.env

if(!DB_URI) throw new Error('DB_URI env variable is not defined')
if(!NODE_ENV) throw new Error('NODE_ENV env variable is not defined')
if(!PORT) throw new Error('PORT env variable is not defined')

module.exports = { DB_URI, NODE_ENV, PORT}