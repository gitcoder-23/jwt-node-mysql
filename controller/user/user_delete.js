const pool = require('../../db/db');

module.exports = {
  async delUser(req, res) {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM user WHERE id = ?';
    console.log(deleteQuery);

    pool.query(deleteQuery, [id])
      .then((row) => {
        if (row) {
          res.send({status: 200, user_deleted: true });
        }
      })
      .catch((err) => {
        res.end({status: 406, user_deleted: false });
        throw err;
      });
  },
};
