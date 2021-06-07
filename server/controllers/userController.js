const { db } = require("../database/db");
const User = require("../models/User");

const getAllUsers = (req, res) => {
	User.getAll()
		.then((result) => res.json(result[0]))
		.catch((err) => res.json(err));
};

module.exports = { getAllUsers };
