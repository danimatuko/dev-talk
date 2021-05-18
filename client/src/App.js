import "./App.css";
import NavBar from "./componenets/layout/navBar/NavBar.jsx";
import MostViewedList from "./componenets/posts/MostViewedList.jsx";

const App = () => {
	return (
		<div className="App">
			<NavBar />
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

export default App;
