const { db } = require("../database/db");
const getCurrentDate = require("../helpers/getCurrentDate");

class Post {
	constructor(post_id, user_id, title, body, date, author, imageUrl) {
		this.post_id = post_id;
		this.user_id = user_id;
		this.title = title;
		this.body = body;
		this.date = date;
		this.author = author;
		this.imageUrl = imageUrl;
	}

	static getAll() {
		const sql = "SELECT * FROM posts";
		return new Promise((resolve, reject) => {
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}

	static getById = (id) => {
		const sql = `SELECT * FROM posts WHERE post_id='${id}'`;
		return new Promise((resolve, reject) => {
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result[0]);
				}
			});
		});
	};

	create(post) {
		return new Promise((reslove, reject) => {
			// prepare query
			const sql = "INSERT INTO posts VALUES (?,?,?,?,?,?,?)";

			db.query(
				sql,
				[
					post.post_id,
					post.user_id,
					post.title,
					post.body,
					post.date,
					post.author,
					post.imageUrl
				],
				(err, result) => {
					if (err) {
						reject(err);
					} else {
						reslove(result);
					}
				}
			);
		});
	}

	static update(id, post) {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE posts SET ? WHERE post_id='${id}'`;
			// update current date
			post.date = getCurrentDate();

			db.query(sql, post, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ msg: "post edited successfully", post: post });
				}
			});
		});
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			const sql = `DELETE FROM posts WHERE post_id = '${id}'`;
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						msg: "post deleted successfully"
					});
				}
			});
		});
	}
}

module.exports = Post;
