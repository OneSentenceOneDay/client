import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../pages/home/Header/Header";
import Main from "../pages/home/Main/Main";
import Sentences from "../pages/mypage/Sentences";
import Hearts from "../pages/mypage/Hearts";
import Login from "pages/auth/Login/Login";
import Password from "../pages/auth/Password/Password";

const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Main />} />
				<Route path="/sentence" element={<Sentences />} />
				<Route path="/heart" element={<Hearts />} />
				<Route path="/login" element={<Login />} />
				<Route path="/password" element={<Password />} />
			</Route>
			<Route path="*" element={<div>There's nothing here!</div>} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
