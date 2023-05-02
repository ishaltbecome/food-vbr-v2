const express = require('express')
const morgan = require('morgan')

const routes = require('./routes')

const app = express()

const PORT = 3000
const HOST = 'localhost'

app
  .use(morgan('dev'))
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use(routes)

app.listen(PORT, HOST, () => console.log(`The server running at ${HOST}:${PORT}`))