const getCurrentDate = require("../helpers/getCurrentDate");
const db = require("../database/db");

class Post {
	constructor(post_id, user_id, title, body, date, author, imageUrl, likes = 0) {
		this.post_id = post_id;
		this.user_id = user_id;
		this.title = title;
		this.body = body;
		this.date = date;
		this.author = author;
		this.imageUrl = imageUrl;
		this.likes = likes;
	}

	static getAll() {
		return db.execute("SELECT * FROM posts");
	}

	static getById = (id) => {
		const sql = `SELECT * FROM posts WHERE post_id='${id}'`;
		return db.execute(sql);
	};

	create(post) {
		return db.execute(`INSERT INTO posts VALUES (?,?,?,?,?,?,?)`, [
			post.post_id,
			post.user_id,
			post.title,
			post.body,
			post.date,
			post.author,
			post.imageUrl
		]);
	}

	static update(id, post) {
		// update current date
		post.date = getCurrentDate();

		return db.execute(
			`UPDATE posts SET title=?,body=?,date=?,imageUrl=? WHERE post_id='${id}'`,
			[post.title, post.body, post.date, post.imageUrl]
		);
	}

	static delete(id) {
		return db.execute(`DELETE FROM posts WHERE post_id = '${id}'`);
	}

	static like(id, like) {
		return new Promise((resolve, reject) => {
			const sql =
				like === "true"
					? `UPDATE posts SET likes = likes + 1 WHERE post_id = '${id}'`
					: `UPDATE posts SET likes = likes - 1 WHERE post_id = '${id}'`;

			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						msg: like === "true" ? "liked" : "unliked"
					});
				}
			});
		});
	}
}

module.exports = Post;
