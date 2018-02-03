module.exports = (req, res, next) => {
  if (!req.session.user.id) return res.status(401).send("You are not logged in")
  else next()
}