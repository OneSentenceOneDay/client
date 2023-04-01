import axios from "axios";
import { useState } from "react";

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

function tokenNotValid() {
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
			sessionStorage.setItem("access_token", res.data.access_token);
			sessionStorage.setItem("refresh_token", res.data.refresh_token);
		})
		.catch(() => {
			sessionStorage.clear();
			alert("로그아웃 되었습니다. 다시 로그인해주세요.");
		});
}

export default tokenNotValid;
