/* eslint-disable no-console */
const pool = require('../../db/db');

module.exports = {

  // For login
  getUserByEmail: (email, callBack)=> {

    // const email = req.body.email;

    let selectQuery = ' SELECT * ';
    selectQuery += ' FROM user WHERE email=? ';
    // console.log("*****>",selectQuery)
    pool.query(selectQuery, [email])
      .then((results) => {
        console.log("*============>",results)
        return callBack(null, results[0]);
      })
      .catch(error=>{
        callBack(error)
      });
  },

  // async getUserByEmail(req, res) {
  //   const email = req.body.email;
  //   console.log(req.body.email)

  //   let selectQuery = ' SELECT * ';
  //   selectQuery += ' FROM user WHERE email=? ';
  //   console.log(selectQuery);

  //   pool.query(selectQuery, [email])
  //     .then((row) => res.send(row))
  //     .catch((err) => {
  //       console.log('useremail Query Error', err);
  //       res.end({ user_by_email: false });
  //     });
  // },


};
