const checkUsername = require('./middleware/checkUsername')
    , checkCredentials = require('./middleware/checkCredentials')
    , checkSessionID = require('./middleware/checkSessionID')

module.exports = app => {
  app.get('/test', (req, res) => {
    console.log("SESSION", req.session)
  })

  app.post('/api/register', checkUsername, (req, res) => {
    const { username, password } = req.body
    // if (req.sreq.session.user.username) return res.status(401).send("User already exists")
    req.app.get('db').create_user([username, password]).then(user => {
      req.session.user = user[0]
      res.status(200).send(user[0])
    })
  })

  app.post('/api/login', checkCredentials, (req, res) => {
    res.status(200).send(req.session.user)
  })

  app.post('/api/properties', checkSessionID, (req, res) => {
    req.app.get('db').create_property([req.session.user.id].concat(Object.values(req.body))).then(properties => {
      res.status(200).send(properties)
    })
  })

  app.get('/api/properties', checkSessionID, (req, res) => {
    req.app.get('db').get_user_properties([req.session.user.id]).then(properties => {
      res.status(200).send(properties)
    })
  })
}