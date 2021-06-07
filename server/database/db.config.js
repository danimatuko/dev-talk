require("dotenv").config();

// {
// 	host: "localhost",
// 	user: "root",
// 	password: "password",
// 	database: "mysqlBlog"
// }

module.exports = {
	host: process.env.HOST,
	user: process.env.ROOT_USER,
	password: process.env.PASSWORD,
	database: process.env.DB_NAME,
	multipleStatements: true
};
