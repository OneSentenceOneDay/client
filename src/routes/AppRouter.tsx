import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../pages/home/Header/Header";
import Main from "../pages/home/Main/Main";
import Sentences from "../pages/mypage/Sentences";
import Hearts from "../pages/mypage/Hearts";
import Login from "pages/auth/Login/Login";
import Password from "../pages/auth/Password/Password";
import ResetPassword from "pages/auth/Password/ResetPassword";
import Signup from "pages/auth/Signup/Signup";

const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Main />} />
				<Route path="/sentence" element={<Sentences />} />
				<Route path="/heart" element={<Hearts />} />
				<Route path="/login" element={<Signup />} />
				<Route path="/password" element={<Password />} />
				<Route path="/password/reset/:uid/:token" element={<ResetPassword />} />
			</Route>
			<Route path="*" element={<div>There's nothing here!</div>} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
