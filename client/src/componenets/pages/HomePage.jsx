import React from "react";
import MostViewedList from "../../componenets/posts/MostViewedList";

const HomePage = () => {
	return (
		<div>
			<div className="container">
				<h1 className="text-center mb-5">Most Viewed</h1>

				<div className="row">
					<div className="col"></div>
					<div className="col-6">
						<MostViewedList />
					</div>
					<div className="col"></div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
