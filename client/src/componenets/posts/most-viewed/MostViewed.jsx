import React from "react";
import "./mostViewed.css";

const MostViewed = ({ post_id, post }) => {
	const { title, body, author, date, imageUrl } = post;
	return (
		<div className="card mb-3">
			{imageUrl && (
				<img
					src={imageUrl}
					alt="..."
					className=""
					style={{ maxHeight: "550px", objectFit: "cover" }}
				/>
			)}
			<div className="card-body">
				<h2 className="card-title h3">{title}</h2>
				<p className="text-preview">{body}</p>
				<span className="text-dark">{author}</span>
				<p className="card-text">
					<small className="text-muted">Last updated at: {date}</small>
				</p>
				<a href="/" className="btn btn-dark">
					Read More
				</a>
			</div>
		</div>
	);
};

export default MostViewed;
