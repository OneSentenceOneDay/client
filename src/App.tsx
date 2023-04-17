import AppRouter from "./routes/AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";

function App() {
	const clientId: string = process.env.REACT_APP_CLIENT_ID!;
	document.cookie = "SameSite=None";
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
