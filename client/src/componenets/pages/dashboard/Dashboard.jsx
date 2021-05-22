import React from "react";
import DashboardTable from "../../dashborad/dashborad-table/DashboardTable";

const Dashboard = () => {
	return (
		<div className="container">
			<h1 className="display-1">Dashboard</h1>
			<h2 className="fs-5">Welcome Dani Matuko</h2>
			<div class="container">
				<div class="row">
					<div class="col-9">
						<DashboardTable />
					</div>
					<div class="col-3">Column</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
