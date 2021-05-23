import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../../redux/auth/authActions";
import { getUsersPosts } from "../../../redux/profile/profileActions";
import DashboardTable from "../../dashborad/dashborad-table/DashboardTable";

const Dashboard = () => {
	const dispatch = useDispatch();
	const {
		isLoading,
		userInfo: { first_name, last_name }
	} = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getLoggedInUser());
		dispatch(getUsersPosts());
	}, []);

	return (
		<div className="container">
			<h1 className="display-1">Dashboard</h1>
			<h2 className="fs-5">{!isLoading && `Welcome ${first_name} ${last_name}`}</h2>
			<div className="container">
				<div className="row">
					<div className="col-9">
						<DashboardTable />
					</div>
					<div className="col-3">Column</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
