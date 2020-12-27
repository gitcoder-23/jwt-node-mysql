const pool = require('../../db/db');

module.exports = {
  async delEmployee(req, res) {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM employee WHERE id = $1';
    console.log(deleteQuery);

    pool.query(deleteQuery, [id])
      .then((row) => {
        if (row) {
          res.send({status: 200, employee_deleted: true });
        }
      })
      .catch((err) => {
        res.end({status: 406, employee_deleted: false });
        throw err;
      });
  },
};
