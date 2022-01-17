const { Pool } = require("pg")
require("dotenv").config( {path: '../.env'} );


const db = new Pool({
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  database: "shopify_challenge"
});

module.exports = db;