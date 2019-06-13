const jwt = require('jsonwebtoken');

const secret = require('../config/secrets').jwtSecret;

module.exports = user => {
  const payload = {
    subject: user.id,
    username: user.username,
    departments: [user.department],
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
};
