import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API;

export default function useLogout(setLogin: any) {
	const navigate = useNavigate();
	axios({
		method: "post",
		url: `${BASE_URL}/logout/`,
		data: {
			refresh: sessionStorage.getItem("refresh_token"),
		},
	}).then((res) => {
		sessionStorage.clear();
		setLogin(false);
		alert(res.data.detail);
		navigate("/");
		window.location.reload(); // 새로고침
	});
}
