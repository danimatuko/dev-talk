var mysql = require("mysql2");
const dbConfig = require("./db.config");

var pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
