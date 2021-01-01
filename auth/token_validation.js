const jwt = require('jsonwebtoken');

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get('authorization');
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);

      //   verify(token, 'qwe1234' process.env.JWT_KEY  from controller
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: 'Invalid Token...',
          });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.json({
        success: 0,
        message: 'Access Denied! Unauthorized User',
      });
    }
  },
};
