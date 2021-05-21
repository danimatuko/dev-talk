import React from "react";
import newPostSchema from "./newPostSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const NewPost = () => {
	// react-hook-form -> useForm hook
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(newPostSchema)
	});

	// add post to DB
	const addPost = async (post) => {
		try {
			await axios.post("/posts", post);
		} catch (error) {
			console.log(error);
		}
	};

	// handle submit
	const onFormSubmit = (post, e) => {
		post.author = "DANI MATUKO";
		addPost(post);
		// reset after form submit
		e.target.reset();
	};

	return (
		<div className="container" style={{ width: "50%" }}>
			<h1 className="text-center">Add New Post</h1>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						name="title"
						{...register("title")}
					/>
					<p className="text-danger ">{errors.title?.message}</p>
				</div>

				<div className="mb-3">
					<label htmlFor="body" className="form-label">
						Write your post here
					</label>
					<textarea
						type="text"
						className="form-control"
						id="body"
						name="body"
						rows="10"
						{...register("body")}
					/>
					<p className="text-danger">{errors.body?.message}</p>
				</div>

				<div className="mb-3">
					<label htmlFor="imageUrl" className="form-label">
						Add Image (optional)
					</label>
					<input
						type="text"
						className="form-control"
						id="imageUrl"
						name="imageUrl"
						{...register("imageUrl")}
					/>
					<p className="text-danger">{errors.imageUrl?.message}</p>
				</div>

				<button type="submit" className="btn btn-success">
					Create Post
				</button>
			</form>
		</div>
	);
};

export default NewPost;
