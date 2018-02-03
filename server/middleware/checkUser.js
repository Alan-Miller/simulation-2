module.exports = (req, res, next) => {
  req.app.get('db').get_user([req.params.id]).then(user => {
    if (!user[0]) return res.status(404).send("No user found")
    else req.session.user = user[0]
    next()
  })
}