const { genSaltSync, hashSync, compareSync } = require('bcrypt');
// for login purpose use jwt or jsonwebtoken
const { sign, verify } = require('jsonwebtoken');
// Service for login
const { getUserByEmail } = require('./user_email');

module.exports = {

    
  login: (req, res) => {
    const body = req.body;
    // console.log(req.body.email)
    getUserByEmail(body.email, (err, results) => {

      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: 'Invalid email or password',
        });
      }

      // console.log("e",err,"res", results, body.password, results.password)
      const result = compareSync(body.password,results.password );
      console.log("e",err,"res", results, result, body.password, results.password)
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
      }else{
        return res.json({
            success: 0,
            data: 'Invalid email or password',
          });
      }
      
    });
  },


  logout: (req,res)=>{ //logout
    token = undefined; //value undefined
    res.send("logout");
 },

 
};
