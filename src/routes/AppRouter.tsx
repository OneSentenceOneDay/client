import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../pages/home/Header/Header";
import Main from "../pages/home/Main/Main";
import Sentences from "../pages/mypage/Sentences";
import Hearts from "../pages/mypage/Hearts";
import Password from "../pages/auth/Password/ChangePassword";
import ResetPassword from "pages/auth/Password/ResetPassword";
import TermsOfUse from "pages/home/Laws/TermsOfUse";
import Privacy from "pages/home/Laws/Privacy";
// import Loading from "components/Loading";
import Event from "../pages/home/Event/Event";
import LoginPage from "../pages/auth/Login/LoginPage";
import SignupPage from "pages/auth/Signup/SignupPage";

const BASE_URL = process.env.REACT_APP_API;

const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Main />} />
				<Route path="/sentence" element={<Sentences />} />
				<Route path="/heart" element={<Hearts />} />
				<Route path="/password" element={<Password />} />
				<Route path="password/reset/:uid/:token" element={<ResetPassword />} />
				<Route path="/termsofuse" element={<TermsOfUse />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/event" element={<Event />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Route>
			<Route path="*" element={<div>There's nothing here!</div>} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
