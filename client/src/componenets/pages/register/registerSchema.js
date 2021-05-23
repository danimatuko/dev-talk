import * as Yup from "yup";

const registerSchema = Yup.object().shape({
	first_name: Yup.string().required("First name is required"),
	last_name: Yup.string().required("Last name is required"),
	email: Yup.string()
		.email("Please enter a correct email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must contain at leats 6 characters")
		.required("Password is required"),
	confirm_password: Yup.string()
		.required("Confirm Password is required")
		.oneOf([Yup.ref("password"), null], "Passwords must match")
});

export default registerSchema;