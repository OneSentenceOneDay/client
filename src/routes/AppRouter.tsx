import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../pages/home/Header/Header";
import Main from "../pages/home/Main/Main";
import Sentences from "../pages/mypage/Sentences";
import Hearts from "../pages/mypage/Hearts";

const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Main />} />
				<Route path="/sentence" element={<Sentences />} />
				<Route path="/hearts" element={<Hearts />} />
			</Route>
			<Route path="*" element={<div>There's nothing here!</div>} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
