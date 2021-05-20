import React from "react";
import loginSchema from "./loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login, setLoadingUser } from "../../../redux/actions/auth/authActions";
const LoginForm = () => {
	const dispatch = useDispatch((state) => state.authState);

	// react-hook-form -> useForm hook
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(loginSchema)
	});

	// handle submit
	const onFormSubmit = (data, e) => {
		// set loader while fetching data
		dispatch(setLoadingUser());
		dispatch(login(data));
		// reset after form submit
		e.target.reset();
	};

	return (
		<div
			className="container d-flex flex-column justify-content-center"
			style={{ height: "70vh" }}>
			<div className="row">
				<div className="col"></div>
				<div className="col-lg-4 col-md-6">
					<div className="border border-dark rounded-1 p-lg-5 p-sm-3 bg-light">
						<h1 className="text-center">Login</h1>
						<form onSubmit={handleSubmit(onFormSubmit)}>
							<div className="mb-3 px-2">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="email"
									name="email"
									{...register("email")}
								/>
								<p className="text-danger ">{errors.email?.message}</p>
							</div>
							<div className="mb-3  px-2">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input
									type="text"
									className="form-control"
									id="password"
									name="password"
									{...register("password")}
								/>
								<p className="text-danger ">{errors.password?.message}</p>
							</div>
							<button type="submit" className="btn btn-success d-block m-auto">
								Login
							</button>
						</form>
					</div>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
};

export default LoginForm;
