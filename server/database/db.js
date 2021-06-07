var mysql = require("mysql2");

var pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	database: "mysqlBlog"
});

module.exports = pool.promise();
