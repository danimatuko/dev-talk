import React from "react";
import { Link } from "react-router-dom";
import "./mostViewed.css";
import { useDispatch } from "react-redux";
import { getPostById } from "../../../redux/post/postActions";
const MostViewed = ({ post }) => {
	const { post_id, title, body, author, date, imageUrl } = post;

	const dispatch = useDispatch();
	return (
		<div className="card mb-5 border-0 rounded-0">
			{imageUrl && (
				<img
					src={imageUrl}
					alt="..."
					className=""
					style={{ height: "300px", objectFit: "fill" }}
				/>
			)}
			<div className="card-body" style={{ height: "280px" }}>
				<h2 className="card-title text-capitalize h3">{title}</h2>
				<p className="text-preview">{body}</p>
				<span className="text-dark text-capitalize">{author}</span>
				<p className="card-text">
					<small className="text-muted">Last updated at: {date}</small>
				</p>
				<Link
					to={`/posts/${post_id}`}
					className="btn btn-dark"
					onClick={() => dispatch(getPostById(post_id))}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default MostViewed;
