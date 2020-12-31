
const { genSaltSync, hashSync, compareSync } = require('bcrypt');

// for login purpose use jwt or jsonwebtoken
const { sign }= require('jsonwebtoken');

// all services taken from service
const { create, getUsersByUserId, getUsers, updateUser, deleteUser, getUserByUserEmail } = require('./user.service');

module.exports = {

    // create user
    createUser: (req, res) =>{
        const body = req.body;
        // To encrypt password & npm i bcrypt
        // To get the genSalt & hashSync
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        // Call create service
        create(body, (err, results) => {
            // call back
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    // get user by id
    getUsersByUserId: (req, res) => {
        // id passed to url
        const id = req.params.id;
        getUsersByUserId(id, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
            return res.json({
                success: 1,
                data: results
            });
        });

    },

    // get all user
    getUsers: (req, res) => {
        getUsers((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },

      // update user
      updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
        //   if(!results){
        //       return res.json({
        //           success: 0,
        //           message: "Failed to update user"
        //       });
        //   }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },

      // delete user
      deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
        //   if (!results) {
        //     return res.json({
        //       success: 0,
        //       message: "Record Not Found"
        //     });
        //   }
          return res.json({
            success: 1,
            message: "user deleted successfully"
          });
        });
      },

// login controller
login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
     },



  
};