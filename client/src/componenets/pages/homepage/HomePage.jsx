import React from "react";
import RecentPostsList from "../../posts/recent-posts-list/RecentPostsList";

const HomePage = () => {
	return (
		<div>
			<div className="container">
					<h2 className="display-5 mb-4">Latest</h2>
				<div className="row justify-content-center">
					<div className="col">
						<RecentPostsList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
