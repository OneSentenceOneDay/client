import {
	ModalContainer,
	DialogBox,
	Backdrop,
	Text,
	SignupBut,
	Input,
	GoogleButton,
	FindBut,
	BottomBut,
} from "./styled";
import Logo from "../../../assets/images/logo.svg";
import Google from "../../../assets/icons/google-icon.svg";
import { useState, useCallback, useEffect } from "react";
import Signup from "../Signup/Signup";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useOutletContext } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { WarningText } from "pages/home/Main/styled";
import { createPortal } from "react-dom";

const BASE_URL = process.env.REACT_APP_API;

function Login({
	openLogin,
	setOpenLogin,
	setFirst,
	setGoogle,
	openResetPasswordModal,
}: any) {
	// ************************ Google login ************************
	const googleLogin = useGoogleLogin({
		onSuccess: async (res) => {
			console.log(res.access_token);
			await axios({
				method: "post",
				url: `${BASE_URL}/accounts/google/login/`,
				data: { access_token: res.access_token },
			})
				.then((res) => {
					// console.log(res);
					sessionStorage.setItem("access_token", res.data.access_token);
					sessionStorage.setItem("refresh_token", res.data.refresh_token);
					sessionStorage.setItem("id", res.data.user.id);
					sessionStorage.setItem("email", res.data.user.email);
					sessionStorage.setItem("nickname", res.data.user.nickname);
					sessionStorage.setItem("subscription", res.data.user.subscription);

					flag[1](false); // cloase login modal
					flag[2](true); // header 프로필 버튼 활성화
					document.body.style.overflow = "unset";
					// 최초 로그인 확인
					if (res.data.user.is_first) {
						setGoogle(true);
					} else {
						window.location.reload(); // 새로고침
					}
				})
				.catch((e) => console.log(e));
		},
	});

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
	const [noWarning, setNoWarning] = useState<boolean>(true);

	function clickLogin() {
		axios({
			method: "post",
			url: `${BASE_URL}/login/`,
			data: {
				email: email,
				password: password,
			},
		})
			.then((res) => {
				console.log(res.data);
				sessionStorage.setItem("access_token", res.data.access_token);
				sessionStorage.setItem("refresh_token", res.data.refresh_token);
				sessionStorage.setItem("nickname", res.data.user.nickname);
				sessionStorage.setItem("id", res.data.user.id);
				sessionStorage.setItem("email", res.data.user.email);
				flag[1](false); // cloase login modal
				flag[2](true); // header 프로필 버튼 활성화
				document.body.style.overflow = "unset";
				// 최초 로그인 확인
				if (res.data.user.is_first && !res.data.user.subscription) {
					setFirst(true);
				} else {
					// window.location.reload(); // 새로고침
				}
				console.log(res);
			})
			.catch(() => {
				setNoWarning(false);
			});
	}

	useEffect(() => {
		setNoWarning(true);
	}, [email, password]);

	return (
		<ModalContainer>
			{openSignup ? (
				<Signup
					setOpenSignup={setOpenSignup}
					setOpenLogin={setOpenLogin}
					setGoogle={setGoogle}
				/>
			) : (
				<DialogBox page={"login"}>
					<img src={Logo} />
					<Text>로그인하셔야 해요</Text>
					<Input noWarning={noWarning} page="login">
						<input
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Input>
					<Input noWarning={noWarning} page={"login"}>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							onKeyUp={(e) => {
								if (e.key === `Enter`) {
									clickLogin();
								}
							}}
						/>
					</Input>
					<WarningText noWarning={noWarning} page="login">
						* 이메일 혹은 비밀번호가 맞지 않습니다.
					</WarningText>
					<button onClick={clickLogin}>로그인</button>
					<GoogleButton onClick={() => googleLogin()}>
						<img src={Google} />
						Google 로그인
					</GoogleButton>
					<BottomBut>
						<SignupBut onClick={opensignupModal}>회원가입</SignupBut>
						<FindBut onClick={openResetPasswordModal}>비밀번호 찾기</FindBut>
					</BottomBut>
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
