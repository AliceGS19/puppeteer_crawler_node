const { users } = require('../../services');

module.exports = async (req, res, next) => {
  try {
      const { login, password } = req.body;
    
      const token = await users.create({ login, password })

      return res.status(201).json({ access_token: token })
  } catch (error) {
      next(error)
  }
}