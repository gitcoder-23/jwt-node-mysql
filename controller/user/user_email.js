/* eslint-disable no-console */
const pool = require('../../db/db');

module.exports = {

  // For login
  getUserByEmail: (email, callBack)=> {

    // const email = req.body.email;

    let selectQuery = ' SELECT email, password ';
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

 


};
