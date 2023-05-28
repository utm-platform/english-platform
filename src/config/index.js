require('dotenv').config()

const { DB_URI, JWT_SECRET, NODE_ENV, PORT } = process.env

if(!DB_URI) throw new Error('DB_URI env variable is not defined')
if(!JWT_SECRET) throw new Error('JWT_SECRET env variable is not defined')
if(!NODE_ENV) throw new Error('NODE_ENV env variable is not defined')
if(!PORT) throw new Error('PORT env variable is not defined')

module.exports = { DB_URI, JWT_SECRET, NODE_ENV, PORT}