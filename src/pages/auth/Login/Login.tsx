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
import Google from "../../../assets/icons/google-icon.svg";

function Login({ openLogin, setOpenLogin, setFirst, setGoogle }: any) {
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
				sessionStorage.setItem("access_token", res.data.access_token);
				sessionStorage.setItem("refresh_token", res.data.refresh_token);
				sessionStorage.setItem("nickname", res.data.user.nickname);
				sessionStorage.setItem("id", res.data.user.id);
				flag[1](false); // cloase login modal
				flag[2](true); // header 프로필 버튼 활성화
				document.body.style.overflow = "unset";
				// 최초 로그인 확인
				if (res.data.user.is_first && !res.data.user.subscription) {
					setFirst(true);
				} else {
					window.location.reload(); // 새로고침
				}
				console.log(res);
			})
			.catch(() => {
				alert("이메일 혹은 비밀번호가 맞지 않습니다.");
			});
	}

	// ************************ Google Login ************************
	function clickGoogleLogin() {
		axios({
			method: "post",
			url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app/accounts/google/login/`,
		})
			.then((res) => {
				// sessionStorage.setItem("access_token", res.data.access_token);
				// sessionStorage.setItem("refresh_token", res.data.refresh_token);
				// sessionStorage.setItem("id", res.data.user.id);
				// flag[1](false); // cloase login modal
				// flag[2](true); // header 프로필 버튼 활성화
				document.body.style.overflow = "unset";
				// 최초 로그인 확인
				if (res.data.user.is_first) {
					setGoogle(true);
				} else {
					window.location.reload(); // 새로고침
				}
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	// ************************ refresh token ************************
	function refreshAccessToken() {
		// access token 만료 여부 확인
		if (sessionStorage.getItem("access_token")) {
			const token = sessionStorage.getItem("access_token");
			const decodedToken = jwt_decode(token!) as any;
			const now = Date.now() / 1000;
			if (decodedToken.exp - now > 300) {
				return; // access token 유효 기간이 5분 이상 남은 경우
			}

			// refresh token 사용하여 새로운 access token 발급받기
			const refresh_token = sessionStorage.getItem("refresh_token");
			axios({
				method: "post",
				data: { refresh: refresh_token },
			})
				.then((res) => {
					sessionStorage.setItem("access_token", res.data.access_token);
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
				<Signup setOpenSignup={setOpenSignup} setOpenLogin={setOpenLogin} />
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
					<button onClick={clickGoogleLogin}>구글 로그인</button>
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
