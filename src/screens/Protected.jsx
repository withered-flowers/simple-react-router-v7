import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Protected = () => {
	const navigate = useNavigate();

	const btnOnClick = () => {
		localStorage.removeItem("token");

		toast("Log out successfully");

		navigate("/");
	};

	return (
		<div>
			<h1>Protected</h1>
			<button type="button" onClick={btnOnClick}>
				Logout
			</button>
		</div>
	);
};

export default Protected;
