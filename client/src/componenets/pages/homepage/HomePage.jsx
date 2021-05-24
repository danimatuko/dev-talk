import React from "react";
import MostViewedList from "../../posts/most-viewed-list/MostViewedList";

const HomePage = () => {
	return (
		<div>
			<div className="container">
				<h1 className="text-center mb-5">Most Viewed</h1>
				<div className="row justify-content-center">
					<div className="col-6">
						<MostViewedList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
