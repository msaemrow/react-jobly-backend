"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseName } = require("./config");
require('dotenv').config();


let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri()
  });
}

console.log("Database connection details:");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("Database Name:", getDatabaseName());

db.connect();

module.exports = db;