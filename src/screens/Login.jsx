import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
	const navigate = useNavigate();

	const [formSubmitData, setFormSubmitData] = useState({
		username: "",
		password: "",
	});

	const formOnSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem("token", formSubmitData.username);

		navigate("/protected");
	};

	return (
		<form onSubmit={formOnSubmit}>
			<input
				type="text"
				placeholder="Username"
				autoComplete="username"
				value={formSubmitData.username}
				onChange={(e) =>
					setFormSubmitData({
						...formSubmitData,
						username: e.target.value,
					})
				}
			/>
			<input
				type="password"
				placeholder="Password"
				autoComplete="current-password"
				value={formSubmitData.password}
				onChange={(e) =>
					setFormSubmitData({
						...formSubmitData,
						password: e.target.value,
					})
				}
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
