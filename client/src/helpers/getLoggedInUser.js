import axios from "axios";
import setAuthToken from "./setAuthToken";

const getLoggedInUser = async () => {
	const token = localStorage.token;
	if (localStorage.token) setAuthToken(token);
	try {
		await axios.get("/user/auth");
	} catch (error) {
		console.log(console.log(error));
	}
};

export default getLoggedInUser;
