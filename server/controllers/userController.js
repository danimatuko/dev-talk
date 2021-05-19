const { db } = require("../db");

// REGISTER
const register = (req, res) => {
	const sql = "INSERT INTO users VALUES (?,?,?,?)";
	const user = req.body;

	db.query(sql, [user.first_name, user.last_name, user.email, user.password], (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json({
				msg: "Registration completed successfully",
				user: { first_name: user.first_name, last_name: user.last_name }
			});
		}
	});
};

// LOGIN
const login = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const sql = 
    `SELECT first_name,last_name,email 
    FROM users 
    WHERE email='${email}' 
    AND password='${password}'`;

	db.query(sql, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json({
				msg: `Hi ${result[0].first_name} ${result[0].last_name}`,
				user: { result }
			});
		}
	});
};

module.exports = { register, login };
