const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const pool = require('../../db/db');
// for login purpose use jwt or jsonwebtoken

// Service for login
// const { getUserByEmail } = require('./user_email');


const self = module.exports = {

    getUserByEmail: async (userName) => {
    const serarchUser = 'select * from user where email = ?';

    return pool
      .query(serarchUser, [userName])
      .then((row) => (!!row[0].user_found))
      .catch(console.error);
  },

  async login(req, res) {
    const userName = req.body.email;
    const { password } = req.body;
    const userPresent = await self.getUserByEmail(userName);

    if (userPresent) {
      const findHash = 'select password from user where email = ?';
      const userId = 'select id from user where email = ?';
      const uId = await pool.query(userId, [userName])
        .then((row) => row)
        .catch(console.error);

      const storedHash = await pool
        .query(findHash, [userName])
        .then((row) => row[0].password)
        .catch(console.error);

      const passwordMatch = compareSync(password, storedHash);

      if (passwordMatch) {
        const token = await sign(userName);
        res.send({ credential: passwordMatch, token, id: uId[0].id });
      } else {
        res.send({ credential: passwordMatch });
      }
    } else {
      res.json({ credential: userPresent });
    }
  },
//   login: (req, res) => {
//     const body = req.body;
//     getUserByEmail(body.email, (err, results) => {
//       if (err) {
//         console.log(err);
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           data: 'Invalid email or password',
//         });
//       }
//       const result = compareSync(body.password, results.password);
//       if (result) {
//         results.password = undefined;
//         const jsontoken = sign({ result: results }, process.env.JWT_SECRET_KEY, {
//           expiresIn: '1h',
//         });
//         return res.json({
//           success: 1,
//           message: 'login successfully',
//           token: jsontoken,
//         });
//       }
//       return res.json({
//         success: 0,
//         data: 'Invalid email or password',
//       });
//     });
//   },
};
