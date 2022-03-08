const { StatusCode } = require('http-status-codes')

module.exports = (err, req, res, next) => {
  console.error(err.message)
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).end()
}