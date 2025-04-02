const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "noms",
  password: "yourpassword",
  port: 5432,
});

module.exports = pool;
