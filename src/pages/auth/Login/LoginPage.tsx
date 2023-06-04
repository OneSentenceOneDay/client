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
// import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import Google from "../../../assets/icons/google-icon.svg";
import FooterComponent from "components/Footer";
import { BlueBigButton, GoogleButton2 } from "components/Button";

const BASE_URL = process.env.REACT_APP_API;

function LoginPage() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function goSignup() {
		navigate("/signup");
	}

	function goResetPassword() {
		navigate("/changePassword");
	}

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
					// 최초 로그인 확인
					if (res.data.user.is_first) {
						// setGoogle(true);
					}
					setLoading(false);
					navigate("/");
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
				localStorage.setItem("access_token", res.data.access_token);
				localStorage.setItem("refresh_token", res.data.refresh_token);
				localStorage.setItem("nickname", res.data.user.nickname);
				localStorage.setItem("id", res.data.user.id);
				localStorage.setItem("email", res.data.user.email);
				localStorage.setItem("subscription", res.data.user.subscription);
				// 최초 로그인 확인
				if (res.data.user.is_first) {
					navigate("/nickname");
				} else {
					navigate("/");
				}
				setLoading(false);
			})
			.catch(() => {
				setNoWarning(false);
				setLoading(false);
				setPassword("");
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
				<BlueBigButton onClick={clickLogin}>로그인</BlueBigButton>
				<GoogleButton2 onClick={() => googleLogin()}>
					<img src={Google} />
					Google 로그인
				</GoogleButton2>
				<BottomBut>
					<SignupBut onClick={goSignup}>회원가입</SignupBut>
					<FindBut onClick={goResetPassword}>비밀번호 찾기</FindBut>
				</BottomBut>
			</InnerWrap>
			<FooterComponent />
		</Wrap>
	);
}

export default LoginPage;
