import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../../redux/auth/authActions";
import { getUsersPosts } from "../../../redux/profile/profileActions";
import DashboardTable from "../../dashborad/dashborad-table/DashboardTable";
import Toast, { notify } from "../../layout/toast/Toast";

const Dashboard = () => {
	const dispatch = useDispatch();
	const post = useSelector((state) => state.post);

	useEffect(() => {
		dispatch(getLoggedInUser());
		dispatch(getUsersPosts());
	}, []);

	const { userInfo } = useSelector((state) => state.auth);

	return (
		<div className="container">

			<h1 className="display-1">Dashboard</h1>
			<h2 className="fs-5 mb-3">
				{userInfo && `Welcome ${userInfo.first_name} ${userInfo.last_name} `}
			</h2>
			<hr />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<DashboardTable />
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
