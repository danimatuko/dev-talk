import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../toast/toastReducer";

export const showNotify = (messagge) => {
	return {
		type: SHOW_NOTIFICATION,
		payload: messagge
	};
};

export const hideNotify = (messagge) => {
	return {
		type: HIDE_NOTIFICATION,
		payload: messagge
	};
};
