import React from "react";
import MostViewedList from "../../componenets/posts/MostViewedList";

const HomePage = () => {
	return (
		<div>
			<div className="container">
				<h1 class="text-center mb-5">Most Viewed</h1>

				<div class="row">
					<div class="col"></div>
					<div class="col-6">
						<MostViewedList />
					</div>
					<div class="col"></div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
