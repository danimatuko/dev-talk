import postTypes from "./postTypes";

const initialState = {
	tite: "",
	body: "",
	imageUrl: "",
	editMode: false
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case postTypes.POST_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				body: action.payload.body,
				imageUrl: action.payload.imageUrl
			};
		case postTypes.POST_FAIL:
			return {
				...state,
				title: "",
				body: "",
				imageUrl: ""
			};
		case postTypes.SET_EDIT_MODE:
			return {
				...state,
				editMode: action.payload
			};
		case ( postTypes.EDIT_POST_SUCCESS):
			return {
				...state,
				title: action.payload.title,
				body: action.payload.body,
				imageUrl: action.payload.imageUrl
			};

		case postTypes.EDIT_POST_FAIL:
			return state;
		default:
			return state;
	}
};

export default postReducer;
