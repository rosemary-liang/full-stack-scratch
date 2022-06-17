// require pg
// create new pg.Pool
// export
const pg = require("pg");
const db = new pg.Pool({
  connectionString: "postgres://dev:dev@localhost/viantPrep",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
