const Pool = require("pg").Pool;
require("dotenv").config();

let proConfig;
let devConfig;
if (process.env.NODE_ENV !== "production") {
  devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD.toString(),
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
  };
} else {
  proConfig = {
    connectionString: process.env.DATABASE_URL,
  };
}

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
module.exports = pool;
