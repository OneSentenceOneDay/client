import { ModalContainer, Text, SignupBut, FindBut, BottomBut } from "./styled";
import { Button } from "components/Button";
import { GoogleButton } from "components/GoogleButton";
import Logo from "../../../assets/images/logo.svg";
import Google from "../../../assets/icons/google-icon.svg";
import { useState, useCallback, useEffect } from "react";
import Signup from "../Signup/Signup";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { WarningText } from "pages/home/Main/styled";
import { createPortal } from "react-dom";
import Loading from "components/Loading";
import { Input } from "components/Input";
import { DialogBox } from "components/DialogBox";
import { Backdrop } from "components/Backdrop";

const BASE_URL = process.env.REACT_APP_API;

function Login({
	openLogin,
	setOpenLogin,
	setFirst,
	setGoogle,
	openResetPasswordModal,
}: any) {
	const [loading, setLoading] = useState(false);

	// ************************ Google login ************************
	const googleLogin = useGoogleLogin({
		onSuccess: async (res) => {
			setLoading(true);
			await axios({
				method: "post",
				url: `${BASE_URL}/accounts/google/login/`,
				data: { access_token: res.access_token },
			})
				.then((res) => {
					console.log(res);
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
					setLoading(false);
				})
				.catch((e) => {
					setLoading(false);
					alert("다시 시도해주세요.");
				});
		},
	});

	// ************************ open signup modal ************************
	const [openSignup, setOpenSignup] = useState<boolean>(false);
	const opensignupModal = () => {
		setOpenSignup(!openSignup);
	};

	// ************************ close login modal ************************
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
		setLoading(true);
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
				sessionStorage.setItem("subscription", res.data.user.subscription);
				flag[1](false); // cloase login modal
				flag[2](true); // header 프로필 버튼 활성화
				document.body.style.overflow = "unset";
				// 최초 로그인 확인
				if (res.data.user.is_first && !res.data.user.subscription) {
					setFirst(true);
				} else {
					window.location.reload(); // 새로고침
				}
				// console.log(res);
				setLoading(false);
			})
			.catch(() => {
				setNoWarning(false);
				setLoading(false);
				alert("이메일 혹은 비밀번호가 맞지 않습니다.");
			});
	}

	useEffect(() => {
		setNoWarning(true);
	}, [email, password]);

	if (loading) return <Loading />;
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
							value={email}
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Input>
					<Input noWarning={noWarning} page={"login"}>
						<input
							value={password}
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
					<Button flag={false} index={1} onClick={clickLogin}>
						로그인
					</Button>
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
