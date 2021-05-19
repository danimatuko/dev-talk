import * as Yup from "yup";

const newPostSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	body: Yup.string().required("Body is required")
});

export default newPostSchema;
