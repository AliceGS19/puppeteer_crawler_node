const { users } = require('../../services')

module.exports = async (req, res, next) => {
  try {
      const { api_token } = req.headers
      if (!api_token) {
        return res.status(401).json({ message: 'Token not found' })
      }
      const user = await users.findUserByToken(api_token)
      if(!user.login) {
        throw error()
      }
      next()
  } catch (error) {
      return res.status(401).json({ message: 'Invalid token' })
  }
}
