import { Switch, Route } from "react-router-dom";
import NewPost from "./componenets/pages/newPost/NewPost";
import NavBar from "./componenets/layout/navBar/NavBar";
import LoginForm from "./componenets/pages/login/LoginForm";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./redux/auth/authActions";
import { useEffect } from "react";
import Dashboard from "./componenets/pages/dashboard/Dashboard";
import HomePage from "./componenets/pages/homepage/HomePage";
import RegisterForm from "./componenets/pages/register/RegisterForm";
import Toast from "./componenets/layout/toast/Toast";
import FullPost from "./componenets/posts/fullPost/FullPost";
import About from "./componenets/about/About";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLoggedInUser());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<NavBar />
			<Toast />
			<div className="container">
				<Switch>
					<Route path="/about" component={About}/>
					<Route path="/register" component={RegisterForm} />
					<Route path="/login" component={LoginForm} />
					<Route path="/profile/dashboard" component={Dashboard} />
					<Route
						path={["/posts/new-post", "/posts/edit-post/:post_id"]}
						component={NewPost}
					/>
					<Route path="/posts/:post_id" component={FullPost} />
					<Route path={["/", "/home"]} component={HomePage} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
