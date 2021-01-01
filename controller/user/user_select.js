/* eslint-disable no-console */
const pool = require('../../db/db');

module.exports = {
  async getUser(req, res) {
    let selectQuery = 'SELECT id, fname, lname, email, phone, password ';
    selectQuery += 'FROM user ORDER BY id ASC';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('user Query Error', err);
        res.end({ status: 200, fetch_user: false });
      });
  },

  async singleUser(req, res) {
    const { id } = req.params;

    let selectQuery = ' SELECT id, fname, lname, email, phone, password ';
    selectQuery += ' FROM user WHERE id=? ';

    pool.query(selectQuery, [id])
      .then((row) => res.send(row))
      .catch((err) => {
        console.log('oneuser Query Error', err);
        res.end({ fetch_one_user: false });
      });
  },


};
