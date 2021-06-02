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
		.then((response) => res.json(response))
		.catch((err) => res.json(err));

	// create user id
	const user_id = uuidv4();

	// hash password before saving to DB
	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(password, salt);

	// create user
	const user = new User(user_id, first_name, last_name, email, hashedPassword);

	User.register(user)
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};

// LOGIN
const login = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.login(email, password)
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};

// GET LOGGED IN USER
const getLoggedInUser = (req, res) => {
	const user = req.user;
	res.json(user);
};

module.exports = { register, login, getLoggedInUser };
