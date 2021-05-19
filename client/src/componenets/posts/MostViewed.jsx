import React from "react";

const MostViewed = ({ post_id, post }) => {
	const { title, body, author, date, imageUrl } = post;
	return (
		<div className="card mb-3">
			{imageUrl && <img src={imageUrl} className="card-img-top" alt="..." />}
			<div className="card-body">
				<h2 className="card-title h3">{title}</h2>
				<p className="lead">{body}</p>
				<span className="text-dark">{author}</span>
				<p className="card-text">
					<small className="text-muted">Last updated at: {date}</small>
				</p>
				<a href="#" className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
};

export default MostViewed;
