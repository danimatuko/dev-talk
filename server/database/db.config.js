const mysql = require("mysql");
require("dotenv").config();

module.exports  = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.ROOT_USER,
	password: process.env.PASSWORD,
	database: process.env.DB_NAME,
	multipleStatements: true
});
