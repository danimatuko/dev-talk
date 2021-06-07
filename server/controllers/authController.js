const { db } = require("../database/db");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// REGISTER
const register = (req, res) => {
	const { first_name, last_name, email, password } = req.body;

	// check if user is registered
	User.isRegistered(req.body.email)
		.then(([rows, fieldData]) => {
			if (rows.length) return res.json({ msg: "user already registered", rows: rows });
		})
		.catch((err) => res.json(err));

	// create user id
	const user_id = uuidv4();

	// hash password before saving to DB
	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(password, salt);

	// create user
	const user = new User(user_id, first_name, last_name, email, hashedPassword);

	User.register(user)
		.then(() => {
			// create JWT
			const payload = {
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				user_id: user.user_id
			};

			const token = jwt.sign(payload, process.env.JWT_SECRET);
			res.json({ token: token, user: payload });
		})
		.catch((err) => res.json(err));
};

// LOGIN
const login = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.login(email)
		.then(([rows, fieldData]) => {
			// if email found
			if (rows.length > 0) {
				// password authentication
				bcrypt
					.compare(password, rows[0].password)
					.then((isValidPassword) => {
						if (!isValidPassword) return res.json({ msg: "Wrong email or password" });
						// create and return a JWT
						const payload = {
							first_name: rows[0].first_name,
							last_name: rows[0].last_name,
							email: rows[0].email,
							user_id: rows[0].user_id
						};

						const token = jwt.sign(payload, process.env.JWT_SECRET);
						// return token on success
						res.json({ token: token, user: payload });
					})
					.catch((err) => res.json(err));
			} else {
				res.json({ messsge: "Wrong email or password" });
			}
		})
		.catch((err) => res.json(err));
};

// GET LOGGED IN USER
const getLoggedInUser = (req, res) => {
	const user = req.user;
	res.json(user);
};

module.exports = { register, login, getLoggedInUser };
