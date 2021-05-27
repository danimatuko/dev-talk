const db = require("./db.config");

const connectToDB = () => {
	db.connect((err) => {
		if (!err) console.log("Connection Established Successfully");
		else console.log("Connection Failed! " + err);
	});

	db.on("error", (err) => {
		console.log("[mysql error]", err);
	});
};

module.exports = { db, connectToDB };
