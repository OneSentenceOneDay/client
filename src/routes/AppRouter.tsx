import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../pages/home/Header/Header";
import Main from "../pages/home/Main/Main";

const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Main />} />
			</Route>
			<Route path="*" element={<div>There's nothing here!</div>} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
