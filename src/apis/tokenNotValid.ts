import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API;

// function useRefreshAccessToken() {
// 	const [flag, setFlag] = useState<boolean>(false);
// 	axios({
// 		method: "post",
// 		url: `${BASE_URL}/dj/token/refresh/`,
// 		headers: {
// 			Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
// 		},
// 		data: {
// 			refresh: sessionStorage.getItem("refresh_token"),
// 		},
// 	}).then((res) => {
// 		sessionStorage.setItem("refresh_token", res.data.access), setFlag(true);
// 	});
// 	return flag;
// }

export function useTokenNotValid() {
	const navigate = useNavigate();
	axios({
		method: "post",
		url: `${BASE_URL}/dj/token/refresh/`,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
		data: {
			refresh: localStorage.getItem("refresh_token"),
		},
	})
		.then((res) => {
			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("refresh_token", res.data.refresh_token);
		})
		.catch(() => {
			localStorage.clear();
			alert("로그아웃 되었습니다. 다시 로그인해주세요.");
			navigate("/");
			// window.location.reload(); // 새로고침
		});
}

function tokenNotValid() {
	axios({
		method: "post",
		url: `${BASE_URL}/dj/token/refresh/`,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
		data: {
			refresh: localStorage.getItem("refresh_token"),
		},
	})
		.then((res) => {
			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("refresh_token", res.data.refresh_token);
		})
		.catch(() => {
			localStorage.clear();
			alert("로그아웃 되었습니다. 다시 로그인해주세요.");
			// window.location.reload(); // 새로고침
		});
}

export default tokenNotValid;

// useEffect(() => {
// 	setInterval(() => {
// 		if (localStorage.getItem("access_token")) {
// 			tokenNotValid();
// 		}
// 	});
// });
