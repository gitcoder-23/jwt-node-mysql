/* eslint-disable no-console */
const pool = require('../../db/db');



module.exports = {
  async addEmployee(req, res) {
    // const { id } = req.body;
    const { fname } = req.body;
    const { lname } = req.body;
    const { cname } = req.body;
    const { address } = req.body;

    // console.log(id, fname, lname, cname, address);

    let insertQuery = 'INSERT INTO employee ';
    insertQuery += '(fname, lname, ';
    insertQuery += 'cname, address) VALUES';
    insertQuery += ' ( $1, $2, $3, $4)';
    // console.log(insertQuery);

    try {
      pool.query(insertQuery,
        [fname, lname, cname, address])
        .then((row) => {
          if (row) {
            // console.log(row);
            res.send({ status: 201, employee_inserted: true });
          }
        })
        .catch((err) => {
          if (err) {
            res.send({ status: 406, employee_inserted: false });
          }
        });
    } catch (errvalue) {
      console.log(errvalue);
    }
  },
};




















