const { db } = require("../database/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { response } = require("express");

class User {
	constructor(id, firstName, lastName, email, password) {
		this.user_id = id;
		this.first_name = firstName;
		this.last_name = lastName;
		this.email = email;
		this.password = password;
	}

	static isRegistered(email) {
		return new Promise((resolve, reject) => {
			const sql = `SELECT email FROM users WHERE email = '${email}'`;
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else if (result.length) {
					resolve({ msg: "user already registered", result });
				}
			});
		});
	}

	static register(user) {
		return new Promise((resolve, reject) => {
			const sql = "INSERT INTO users VALUES (?,?,?,?,?)";
			db.query(
				sql,
				[user.user_id, user.first_name, user.last_name, user.email, user.password],
				(err, result) => {
					if (err) {
						reject(err);
					} else {
						// create JWT
						const payload = {
							first_name: user.first_name,
							last_name: user.last_name,
							email: user.email,
							user_id: user.user_id
						};

						const token = jwt.sign(payload, process.env.JWT_SECRET);
						resolve({ token: token, user: payload });
					}
				}
			);
		});
	}

	static login(email, password) {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM users WHERE email='${email}'`;

			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					if (result.length > 0) {
						// password authentications
						const isValidPassword = bcrypt
							.compare(password, result[0].password)
							.then((response) => response)
							.catch((err) => err);

						if (!isValidPassword) reject({ msg: "Wrong email or password" });
						// create and return a JWT
						const payload = {
							first_name: result[0].first_name,
							last_name: result[0].last_name,
							email: result[0].email,
							user_id: result[0].user_id
						};
						const token = jwt.sign(payload, process.env.JWT_SECRET);
						resolve({ token: token, user: payload });
					} else {
						reject({ messsge: "Wrong email or password" });
					}
				}
			});
		});
	}

	static getAll() {
		return new Promise((resolve, reject) => {
			const sql = "SELECT * FROM users";
			db.query(sql, (err, result) => {
				if (err) reject(err);
				else resolve(result);
			});
		});
	}
}

module.exports = User;
