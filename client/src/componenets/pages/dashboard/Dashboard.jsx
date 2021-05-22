import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersPosts, setLoadingUsersPosts } from "../../../redux/profile/profileActions";
import DashboardTable from "../../dashborad/dashborad-table/DashboardTable";

const Dashboard = () => {
	const dispatch = useDispatch();
	const { first_name, last_name } = useSelector((state) => state.auth.userInfo);

	useEffect(() => {
		dispatch(getUsersPosts());
	}, []);

	return (
		<div className="container">
			<h1 className="display-1">Dashboard</h1>
			<h2 className="fs-5">
				Welcome {first_name} {last_name}
			</h2>
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
