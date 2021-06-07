const db = require("../database/db");
const User = require("../models/User");

const getUsersPosts = (req, res) => {
	const { user_id } = req.user;
	if (!user_id || user_id === null) return res.send("Invalid user id");

	User.posts(user_id)
		.then((result) =>
			result[0].length
				? res.json(result[0])
				: res.json({ message: "You do not have posts yet..." })
		)
		.catch((err) => res.json(err));
};

module.exports = { getUsersPosts };
