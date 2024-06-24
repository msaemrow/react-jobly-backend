"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseName } = require("./config");
require('dotenv').config();


const db = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: getDatabaseName()
});

console.log("Database connection details:");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("Database Name:", getDatabaseName());

db.connect();

module.exports = db;