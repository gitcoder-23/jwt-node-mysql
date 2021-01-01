const { compareSync } = require('bcrypt');

// for login purpose use jwt or jsonwebtoken
const { sign } = require('jsonwebtoken');
// Service for login
const { getUserByEmail } = require('./user_email');

module.exports = {

    
  login: (req, res) => {
    const body = req.body;
    // console.log(req.body.email)
    getUserByEmail(req.body.email, (err, results) => {

    //   if (err) {
    //     console.log(err);
    //   }
    //   if (!results) {
    //     return res.json({
    //       success: 0,
    //       data: 'Invalid email or password',
    //     });
    //   }
      const result = compareSync(req.body.password, results.password);
      console.log("e",err,"res",results,result,req.body.password)
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_SECRET_KEY, {
          expiresIn: '1h',
        });
        return res.json({
          success: 1,
          message: 'login successfully',
          token: jsontoken,
        });
      }
      return res.json({
        success: 0,
        data: 'Invalid email or password',
      });
    });
  },
};
