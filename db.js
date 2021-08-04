/** Database config for database. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

let db = new Client({
  connectionString: DB_URI,
});
console.log(db.database);
db.connect();

module.exports = db;
