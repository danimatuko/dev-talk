import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import postReducer from "./post/postReducer";
import profileReducer from "./profile/profileReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	profile: profileReducer
});

export default rootReducer;
