import authTypes from "./authTypes";

const initialState = {
	token: null,
	isLoggedIn: false,
	userInfo: null,
	isLoading: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				token: action.payload.token,
				isLoggedIn: true,
				isLoading: false,
				userInfo: action.payload.userInfo
			};
		case (authTypes.LOGIN_FAIL, authTypes.LOGOUT):
			return {
				...state,
				token: null,
				isLoggedIn: false,
				isLoading: false,
				userInfo: null
			};
		case authTypes.SET_LOADING_USER:
			return {
				...state,
				isLoading: true
			};

		case authTypes.AUTH_SUCCESS:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				isLoading: action.payload.isLoading,
				userInfo: action.payload.userInfo
			};
		case authTypes.AUTH_FAIL:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				isLoading: action.payload.isLoading,
				userInfo: null
			};

		default:
			return state;
	}
};

export default authReducer;