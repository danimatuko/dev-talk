const { db } = require("../db");
const getCurrentDate = require("../helpers/getCurrentDate");
const { v4: uuidv4 } = require("uuid");

// GET ALL POSTS
const getAllPosts = (req, res) => {
	const sql = "SELECT * FROM posts";
	db.query(sql, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
};

// ADD POST
const addPost = async (req, res) => {
	// prepare query
	const sql = "INSERT INTO posts VALUES (?,?,?,?,?,?,?)";
	const post = req.body;
	//add uniqe id
	post.post_id = uuidv4();
	// add current date
	post.date = getCurrentDate();
	// get more details from the token of the logged in user to add to the post
	const { first_name, last_name, user_id } = req.user;
	author = first_name + " " + last_name;
	post.author = author;
	post.user_id = user_id;

	db.query(
		sql,
		[post.post_id, post.user_id, post.title, post.body, post.date, post.author, post.imageUrl],
		(err, result) => {
			if (err) {
				res.json(err);
			} else {
				res.json({ msg: "post added successfully", post: post });
			}
		}
	);
};

// UPDATE POST
const updatePost = (req, res) => {
	const sql = `UPDATE posts SET ? WHERE post_id= ${req.params.id}`;
	const post = req.body;
	// update current date
	post.date = getCurrentDate();

	db.query(sql, post, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json({ msg: "post edited successfully", post: req.body });
		}
	});
};

// DELETE POST
const deletePost = (req, res) => {
	const sql = `DELETE FROM posts WHERE post_id = ${req.params.id}`;
	db.query(sql, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json({
				msg: "post deleted successfully"
			});
		}
	});
};

module.exports = { getAllPosts, addPost, updatePost, deletePost };
