const { db } = require("../database/db");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// REGISTER
const register = async (req, res) => {
	// check if user is registered
	let sql = `SELECT email FROM users WHERE email = '${req.body.email}'`;
	db.query(sql, (err, result) => {
		if (err) {
			res.json(err);
		} else if (result.length) {
			res.json({ msg: "user already registered", result });
		}
	});

	sql = "INSERT INTO users VALUES (?,?,?,?,?)";
	const user = req.body;
	// create and add user id
	user.user_id = uuidv4();
	// hash password before saving to DB
	try {
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
	} catch (error) {
		console.log(error);
	}

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
				res.header("x-auth-token", token).json({ token: token, user: payload });
			}
		}
	);
};

// LOGIN
const login = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const sql = `SELECT *
    FROM users 
    WHERE email='${email}' 
    AND password='${password}'`;

	db.query(sql, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			if (result.length > 0) {
				// create and return a JWT
				payload = {
					first_name: result[0].first_name,
					last_name: result[0].last_name,
					email: result[0].email,
					user_id: result[0].user_id
				};
				const token = jwt.sign(payload, "jwtSecret");
				res.status(200).json({ token: token, user: payload });
			} else {
				res.status(401).json({ messsge: "Wrong email or password" });
			}
		}
	});
};

const getLoggedInUser = (req, res) => {
	const user = req.user;
	res.json(user);
};

module.exports = { register, login, getLoggedInUser };
