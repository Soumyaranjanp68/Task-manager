const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Authorization token not provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decodedToken.userId;
    next();
  });
};

const authorize = (roles) => (req, res, next) => {
  const userRole = 'get user role from database'; // Implement logic to get the user role based on the user ID

  if (!roles.includes(userRole)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = { authenticate, authorize };
