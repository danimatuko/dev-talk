import React, { useEffect, useState } from "react";
import newPostSchema from "./newPostSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreatePostForm = () => {
	const initialState = {
		title: "",
		body: "",
		image: ""
	};

	const onFormSubmit = (post) => {
		console.log(post);
	};

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(newPostSchema)
	});

	return (
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
				<label htmlFor="image" className="form-label">
					Add Image (optional)
				</label>
				<input
					type="text"
					className="form-control"
					id="image"
					name="image"
					{...register("image")}
				/>
				<p className="text-danger">{errors.image?.message}</p>
			</div>

			<button type="submit" className="btn btn-success">
				Create Post
			</button>
		</form>
	);
};

export default CreatePostForm;
