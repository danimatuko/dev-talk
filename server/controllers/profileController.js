const { db } = require("../database/db");

const getUsersPosts = (req, res) => {
	if (!req.user.user_id || req.user.user_id === null) return res.send("Invalid user id");
	const sql = `SELECT * FROM posts WHERE user_id= '${req.user.user_id}'`;
	db.query(sql, (err, result) => {
		if (err) res.json(err);
		else res.json(result);
	});
};

module.exports = { getUsersPosts };
