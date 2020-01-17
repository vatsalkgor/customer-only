const sqlite3 = require("sqlite3").verbose();

module.exports = new sqlite3.Database("customeronly.db", err => {
  if (err) {
    console.log(err);
  }
  console.log("connected to db");
});
