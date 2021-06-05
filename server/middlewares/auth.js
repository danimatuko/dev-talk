const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	// get the token from the header
	const token = req.header("x-auth-token");
	if (!token) {
		return res.status(401).json({ msg: "No token , accsess denied" });
	}
	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		// add the token to the request
		req.user = decodedToken;
		next();
	} catch (e) {
		return res.status(401).json({
			msg: "Invalid token , accsess denied"
		});
	}
};
