const { db } = require("../db");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

// REGISTER
const register = (req, res) => {
	const sql = "INSERT INTO users VALUES (?,?,?,?,?)";
	const user = req.body;
	// create and add user id
	user.user_id = uuidv4();

	db.query(
		sql,
		[user.user_id, user.first_name, user.last_name, user.email, user.password],
		(err, result) => {
			if (err) {
				res.json(err);
			} else {
				// create JWT
				payload = {
					first_name: user.first_name,
					last_name: user.last_name,
					email: user.email,
					user_id: user.user_id
				};

				const token = jwt.sign(payload, "jwtSecret");
				// set token in header
				res.header("x-auth-token", token).json(token);
			}
		}
	);
};

// LOGIN
const login = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const sql = 
	`SELECT first_name,last_name,email,user_id
    FROM users 
    WHERE email='${email}' 
    AND password='${password}'`;
 
	db.query(sql, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			// create and return a JWT
			payload = {
				first_name: result[0].first_name,
				last_name: result[0].last_name,
				email: result[0].email,
				user_id: result[0].user_id
			};
			const token = jwt.sign(payload, "jwtSecret");
			res.json({ token: token, user: result[0] });
		}
	});
};

const getLoggedInUser = (req, res) => {
	const user = req.user;
	res.json(user);
};

module.exports = { register, login, getLoggedInUser };
