const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Ritter1209",
  host: "localhost",
  port: 5432,
  database: "pernstack",
});
module.exports = pool;
