import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { BrowserRouter, Route, Routes } from "react-router";
import About from "./screens/About";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Protected from "./screens/Protected";
import Protection from "./screens/Protection";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ToastContainer />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route element={<Protection />}>
					<Route path="/protected" element={<Protected />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
