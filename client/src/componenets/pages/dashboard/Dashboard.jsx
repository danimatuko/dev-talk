import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersPosts } from "../../../redux/profile/profileActions";
import DashboardTable from "../../dashborad/dashborad-table/DashboardTable";

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersPosts());
	}, []);

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
