const db = require("../database/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class User {
	constructor(id, firstName, lastName, email, password) {
		this.user_id = id;
		this.first_name = firstName;
		this.last_name = lastName;
		this.email = email;
		this.password = password;
	}

	static isRegistered(email) {
		return db.execute(`SELECT email FROM users WHERE email = '${email}'`);
	}

	static register(user) {
		return db.execute("INSERT INTO users VALUES (?,?,?,?,?)", [
			user.user_id,
			user.first_name,
			user.last_name,
			user.email,
			user.password
		]);
	}

	static login(email) {
		return db.execute(`SELECT * FROM users WHERE email='${email}'`);
	}

	static getAll() {
		return db.execute("SELECT * FROM users");
	}

	static posts(id) {
		return db.execute(`SELECT * FROM posts WHERE user_id= '${id}'`);
	}
}

module.exports = User;
