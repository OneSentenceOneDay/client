import AppRouter from "./routes/AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
	return (
		<>
			<GoogleOAuthProvider clientId="545784795345-fmtsh28pg9pu9n17ks8ob987qvevrpiu.apps.googleusercontent.com">
				<AppRouter />
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
