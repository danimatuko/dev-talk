import React from "react";
import MostViewedList from "../../posts/most-viewed-list/MostViewedList";

const HomePage = () => {
	return (
		<div>
			<div className="container">
				<h1 className="mb-5 display-1">Most Viewed</h1>
				<div className="row justify-content-center">
					<div className="col">
						<MostViewedList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
