import { Link } from "react-router";

const Home = () => {
	return (
		<section>
			<p>Home</p>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "0.25rem",
				}}
			>
				<Link to="/about">About</Link>
				<Link to="/login">Login</Link>
				<Link to="/protected">Protected</Link>
			</div>
		</section>
	);
};

export default Home;
