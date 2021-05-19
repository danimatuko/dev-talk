const { db } = require("../db");
const getCurrentDate = require("../helpers/getCurrentDate");

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
const addPost = (req, res) => {
	const sql = "INSERT INTO posts SET ?";
	const post = req.body;
	// add current date
	post.date = getCurrentDate();

	db.query(sql, post, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json({ msg: "post added successfully", post: post });
		}
	});
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
