const jwt = require('jsonwebtoken');

const secret = require('../config/secrets.js').jwtSecret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodeToken) => {
      if (err) {
        // invalid token
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        // valid token
        req.user = { roles: decodeToken.roles, username: decodeToken.username };
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No token provided' });
  }
};
