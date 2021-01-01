/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable radix */
const { genSaltSync, hashSync } = require('bcrypt');
const pool = require('../../db/db');


module.exports = {
  async putUser(req, res) {
    // const id = parseInt(req.params.id);
    const pbody = req.body;

    const { id } = req.params;
    const { fname } = req.body;
    const { lname } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    // const { password } = req.body;
    // To encrypt password & npm i bcrypt
    // To get the genSalt & hashSync
    const salt = genSaltSync(10);
    pbody.password = hashSync(pbody.password, salt);


    const updateQuery = 'UPDATE user SET fname = ?, lname = ?, email = ?, phone = ?, password= ? WHERE id = ?';

    console.log(updateQuery);
    try {
      pool.query(updateQuery,
        [fname, lname, email, phone, pbody.password, id])
        .then((row) => {
          if (row) {
            res.send({ status: 200, user_updated: true });
          }
        })
        .catch((err) => {
          console.log('user update Query Error ', err);
          res.end({ status: 406, user_updated: false });
        });
    } catch (errvalue) {
      console.log(errvalue);
    }
  },

};


// let updateQuery = 'UPDATE employee SET';
// updateQuery += ' fname = $1,';
// updateQuery += ' lname = $2,';
// updateQuery += ' cname = $3,';
// updateQuery += ' address = $4';
// updateQuery += ' WHERE id= $5';
