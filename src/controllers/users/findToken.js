const { users } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { login, password } = req.body;
  
    const token = await users.findToken({ login, password })
    if (!token) {
      return res.status(404).json({ message: "User token not found" })
    }
    return res.status(200).json({ access_token: token })
  } catch (error) {
    next(error)
  }
}