import { Input } from "components/Input";
import { Wrap } from "components/styled";
import { Text } from "../Password/styled";
import { WarningText } from "pages/home/Main/styled";
import { useGoogleLogin } from "@react-oauth/google";
import { BottomBut, FindBut, InnerWrap, SignupBut } from "./styled";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../Password/styled";
import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import FooterComponent from "components/Footer";

const BASE_URL = process.env.REACT_APP_API;

function LoginPage() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
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
					localStorage.setItem("access_token", res.data.access_token);
					localStorage.setItem("refresh_token", res.data.refresh_token);
					localStorage.setItem("id", res.data.user.id);
					localStorage.setItem("email", res.data.user.email);
					localStorage.setItem("nickname", res.data.user.nickname);
					localStorage.setItem("subscription", res.data.user.subscription);
					navigate("/");
					// 최초 로그인 확인
					if (res.data.user.is_first) {
						// setGoogle(true);
					} else {
						window.location.reload(); // 새로고침
					}
					setLoading(false);
					console.log(res);
				})
				.catch((e) => {
					setLoading(false);
					alert("다시 시도해주세요.");
				});
		},
	});

	// ************************ Login ************************
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	// const flag = useOutletContext<any>();
	const [noWarning, setNoWarning] = useState<boolean>(true);

	function clickLogin() {
		setLoading(true);
		setNoWarning(true);
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
				localStorage.setItem("access_token", res.data.access_token);
				localStorage.setItem("refresh_token", res.data.refresh_token);
				localStorage.setItem("nickname", res.data.user.nickname);
				localStorage.setItem("id", res.data.user.id);
				localStorage.setItem("email", res.data.user.email);
				localStorage.setItem("subscription", res.data.user.subscription);
				// flag[1](false); // cloase login modal
				// document.body.style.overflow = "unset";
				navigate("/");
				// 최초 로그인 확인
				if (res.data.user.is_first && !res.data.user.subscription) {
					// setFirst(true);
				} else {
					window.location.reload(); // 새로고침
				}
				// console.log(res);
				setLoading(false);
			})
			.catch(() => {
				setNoWarning(false);
				setLoading(false);
				setPassword("");
				// alert("이메일 혹은 비밀번호가 맞지 않습니다.");
			});
	}

	return (
		<Wrap>
			<InnerWrap>
				<Text>로그인 하세요 👋</Text>
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
				<Button google={false} onClick={clickLogin}>
					로그인
				</Button>
				<Button google={true} onClick={() => googleLogin()}>
					<GoogleIcon />
					Google 로그인
				</Button>
				<BottomBut>
					<SignupBut>회원가입</SignupBut>
					<FindBut>비밀번호 찾기</FindBut>
				</BottomBut>
			</InnerWrap>
			<FooterComponent />
		</Wrap>
	);
}

export default LoginPage;
