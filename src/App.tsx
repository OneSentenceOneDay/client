import AppRouter from "./routes/AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";
import ReactGA from "react-ga";

function App() {
	const clientId: string = process.env.REACT_APP_CLIENT_ID!;
	// document.cookie = "cookie2=value2; SameSite=None; Secure";
	const gaTrackingId: string = process.env.REACT_APP_GA_TRACKING_ID!; // 환경 변수에 저장된 추적ID 가져오기
	ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
	ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

	return (
		<>
			<GoogleOAuthProvider clientId={clientId}>
				<CookiesProvider>
					<AppRouter />
				</CookiesProvider>
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
