const jwt = require('jsonwebtoken');

require('dotenv').config({
    path: ".env"
});

const SECRET_KEY = process.env.SECRET_KEY;

function generateToken(user) {
  const token = jwt.sign(user, SECRET_KEY)
  return token
}

module.exports = generateToken