/* eslint-disable no-console */
const { genSaltSync, hashSync } = require('bcrypt');
const pool = require('../../db/db');



module.exports = {
  async addUser(req, res) {
    const pbody = req.body;

    const { fname } = req.body;
    const { lname } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    // const { password } = req.body;
    // To encrypt password & npm i bcrypt
    // To get the genSalt & hashSync
    const salt = genSaltSync(10);
    pbody.password = hashSync(pbody.password, salt);

    console.log(fname, lname, email, phone, pbody.password);

    let insertQuery = 'INSERT INTO user ';
    insertQuery += '(fname, lname, ';
    insertQuery += 'email, phone, password) VALUES';
    insertQuery += ' ( ?, ?, ?, ?, ?)';
    console.log(insertQuery);

    try {
      pool.query(insertQuery,
        [fname, lname, email, phone, pbody.password])
        .then((row) => {
          if (row) {
            // console.log(row);
            res.send({ status: 201, user_inserted: true });
          }
        })
        .catch((err) => {
          if (err) {
            res.send({ status: 406, user_inserted: false });
          }
        });
    } catch (errvalue) {
      console.log(errvalue);
    }
  },
};




















