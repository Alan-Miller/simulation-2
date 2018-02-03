require('dotenv').config()
const express = require('express')
  , { SERVER_PORT, PG_STRING, SESSION_SECRET } = process.env
  , bodyParser = require('body-parser')
  , massive = require('massive')
  , session = require('express-session')
  , checkSessionUser = require('./middleware/checkSessionUser')
  , checkUser = require('./middleware/checkUser')
  , api = require('./api')
const app = express()

app.use(bodyParser.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

massive(PG_STRING).then(db => app.set('db', db))

app.use(checkSessionUser)

api(app)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}.`))