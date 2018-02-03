module.exports = (req, res, next) => {
  req.app.get('db').get_username([req.body.username]).then(user => {
    if (user[0]) return res.status(401).send("Username taken")
    // else req.session.user = user[0]
    else next()
  })
}