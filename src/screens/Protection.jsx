import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Protection = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		}

		// Show toastify only once
		toast("Login first lah");
	}, [navigate]);

	return (
		<>
			<Outlet />
		</>
	);
};

export default Protection;
