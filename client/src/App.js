import "./App.css";
import HomePage from "./componenets/pages/HomePage";
import { Switch, Route } from "react-router-dom";
import NewPost from "./componenets/pages/NewPost";
import NavBar from "./componenets/layout/navBar/NavBar";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/about"></Route>
				<Route path="/new-post" component={NewPost} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
};

export default App;
