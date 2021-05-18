const mysql = require("mysql");

// mySQL details
var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "mysqlBlog",
	multipleStatements: true
});

const connectToDb = () => {
	db.connect((err) => {
		if (!err) console.log("Connection Established Successfully");
		else console.log("Connection Failed! " + err);
	});
};

module.exports = { db, connectToDb };
