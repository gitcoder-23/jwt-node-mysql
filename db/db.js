/* eslint-disable consistent-return */

// const postgreSql = require('pg');

const { Pool, Client } = require('pg');
require('dotenv').config();

class Database {
  constructor() {
    this.connection = new Pool({
      connectionLimit: 100,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.PASSWORD,
      debug: false,
    });
  }

  query(sql, args) {
    // console.log(sql, args);
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        console.log(err, rows);
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}

module.exports = new Database();
