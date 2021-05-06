const Pool = require("pg").Pool;
require("dotenv").config({ path: "../.env" });

let dataConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

/* const devConfig = {
  user: dataConfig.user,
  password: dataConfig.password,
  host: dataConfig.host,
  port: dataConfig.port,
  database: dataConfig.database,
}; */

const devConfig = {
  connectionString: `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
};
const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

pool.on("error", function (err, client) {
  console.error("idle client error", err.message, err.stack);
});
module.exports = pool;
