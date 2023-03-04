import AppRouter from "./routes/AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
	const clientId: string = process.env.REACT_APP_CLIENT_ID!;
	return (
		<>
			<GoogleOAuthProvider clientId={clientId}>
				<AppRouter />
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
