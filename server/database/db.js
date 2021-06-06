let db = require("./db.config");

const connectToDB = () => {
	db.connect((err) => {
		if (!err) console.log("Connection Established Successfully");
		else console.log("Connection Failed! " + err);
	});

	const handleDisconnect = () => {
		db = require("./db.config");
		db.connect((err) => {
			if (err) {
				console.log("error when connecting to db:", err);
				setTimeout(handleDisconnect, 10000);
			}
		});
	};

	db.on("error", (err) => {
		console.log("[mysql error]", err);
		if (err.code == "PROTOCOL_CONNECTION_LOST") {
			handleDisconnect();
		} else {
			throw err;
		}
	});
};

module.exports = { db, connectToDB };
