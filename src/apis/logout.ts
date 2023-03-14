import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API;
const navigate = useNavigate();

// ************************ refresh token ************************
export function refreshAccessToken(setLogin: any) {
	axios({
		method: "post",
		url: `${BASE_URL}/dj/token/refresh/`,
		headers: {
			Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
		},
		data: {
			refresh: sessionStorage.getItem("refresh_token"),
		},
	})
		.then((res) => {
			sessionStorage.setItem("access_token", res.data.access);
		})
		.catch((e) => {
			alert("다시 로그인 해주세요");
			sessionStorage.clear();
			setLogin(false);
			navigate("/");
			window.location.reload(); // 새로고침
		});
}

// ************************ logout ************************
export function useLogout(setLogin: any) {
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
