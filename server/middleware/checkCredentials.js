module.exports = (req, res, next) => {
  const { username, password } = req.body
  req.app.get('db').get_user_by_creds([username, password]).then(user => {
    if (!user[0]) return res.status(401).send("Bad credentials")
    else {
      req.session.user = user[0]
      next()
    }
  })
}