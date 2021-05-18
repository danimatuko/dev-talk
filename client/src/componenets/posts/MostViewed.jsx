import React from "react";

const MostViewed = ({ post_id, post }) => {
	const { title, body, author, date } = post;
	return (
		<div className="card mb-3">
			<img
				src="https://cdn.pixabay.com/photo/2021/05/08/03/30/waterfall-6237479__340.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h2 className="card-title h3">{title}</h2>
				<p className="lead">{body}</p>
				<span className="text-dark">{author}</span>
				<p className="card-text">
					<small className="text-muted">
						Last updated at: {date}
					</small>
				</p>
				<a href="#" className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
};

export default MostViewed;
