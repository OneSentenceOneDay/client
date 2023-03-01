import {
	ModalContainer,
	DialogBox,
	Backdrop,
	Text,
	SignupBut,
	Input,
} from "./styled";
import Logo from "../../../assets/images/logo.svg";
import { useState, useCallback } from "react";
import Signup from "../Signup/Signup";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useOutletContext } from "react-router-dom";

function Login({ openLogin, setOpenLogin, setFirst }: any) {
	// ************************ open signup modal ************************
	const [openSignup, setOpenSignup] = useState<boolean>(false);
	const opensignupModal = () => {
		setOpenSignup(!openSignup);
	};

	// ************************ close modal ************************
	const onClickToggleModal = useCallback(() => {
		setOpenLogin(!openLogin);
		document.body.style.overflow = "unset";
	}, [openLogin]);

	// ************************ Login ************************
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const flag = useOutletContext<any>();

	function clickLogin() {
		axios({
			method: "post",
			url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app/login/`,
			data: {
				email: email,
				password: password,
			},
		})
			.then((res) => {
				axios.defaults.headers.common[
					"Authorization"
				] = `Bearer ${res.data.access_token}`; // token 필요한 API 요청 시 header Authorization에 token 담아서 보내기
				localStorage.setItem("access_token", res.data.access_token);
				localStorage.setItem("refresh_token", res.data.refresh_token);
				localStorage.setItem("nickname", res.data.user.nickname);
				localStorage.setItem("id", res.data.user.id);
				flag[1](false); // cloase login modal
				flag[2](true); // header 프로필 버튼 활성화
				document.body.style.overflow = "unset";
				if (res.data.user.is_first & res.data.user.subscription) {
					setFirst(true);
				}
				console.log(res);
			})
			.catch((error) => {
				// alert(error.response.data.non_field_errors[0]);
			});
	}

	// ************************ refresh token ************************
	function refreshAccessToken() {
		// access token 만료 여부 확인
		if (localStorage.getItem("access_token")) {
			const token = localStorage.getItem("access_token");
			const decodedToken = jwt_decode(token!) as any;
			const now = Date.now() / 1000;
			if (decodedToken.exp - now > 300) {
				return; // access token 유효 기간이 5분 이상 남은 경우
			}

			// refresh token 사용하여 새로운 access token 발급받기
			const refresh_token = localStorage.getItem("refresh_token");
			axios({
				method: "post",
				data: { refresh: refresh_token },
			})
				.then((res) => {
					localStorage.setItem("access_token", res.data.access_token);
					console.log("Access token refreshed");
				})
				.catch((error) => {
					console.error("Failed to refresh access token", error);
				});
		}
	}
	setInterval(refreshAccessToken, 300000); // 5분마다 갱신 시도

	return (
		<ModalContainer>
			{openSignup ? (
				<Signup />
			) : (
				<DialogBox page={"login"}>
					<img src={Logo} />
					<Text>로그인하셔야 해요</Text>
					<Input>
						<input
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Input>
					<button onClick={clickLogin}>로그인</button>
					<button>구글 로그인</button>
					<SignupBut onClick={opensignupModal}>회원가입</SignupBut>
				</DialogBox>
			)}
			<Backdrop
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					if (onClickToggleModal) {
						onClickToggleModal();
					}
				}}
			/>
		</ModalContainer>
	);
}

export default Login;
