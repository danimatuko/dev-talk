const { db } = require("../database/db");

const getAllUsers = (req, res) => {
	const sql = "SELECT first_name,last_name,email FROM users";
	db.query(sql, (err, result) => {
		if (err) res.json(err);
		else return res.json(result);
	});
};

module.exports = { getAllUsers };
