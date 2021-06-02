const { db } = require("../database/db");
const User = require("../models/User");

const getAllUsers = (req, res) => {
	User.getAll()
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};

module.exports = { getAllUsers };
