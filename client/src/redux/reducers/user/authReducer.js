import authTypes from "../../actions/auth/authTypes";

const initialState = {
	isLoggedIn: false,
	token: null,
	isLoading: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isLoggedIn: true,
				token: action.payload.token,
				isLoading: false
			};
		case authTypes.LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				isLoading: false
			};
		case authTypes.SET_LOADING_USER:
			return {
				...state,
				isLoading: true
			};
		default:
			return state;
	}
};

export default authReducer;
