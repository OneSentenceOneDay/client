import { Text } from "../Login/styled";
import { Privacy, WarningText } from "./styled";
import { Button } from "components/Button";
import { GoogleButton } from "components/GoogleButton";
import Logo from "../../../assets/images/logo.svg";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "components/Modal";
import axios from "axios";
import Google from "../../../assets/icons/google-icon.svg";
import { useOutletContext } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import Loading from "components/Loading";
import { Input } from "components/Input";
import { DialogBox } from "components/DialogBox";

const BASE_URL = process.env.REACT_APP_API;

function Signup({ setOpenSignup, setOpenLogin, setGoogle }: any) {
	const [loading, setLoading] = useState(false);
	const [privacy, setPrivacy] = useState(false);
	const [confirmModal, setConfirmModal] = useState(false);

	// ************************ close modal ************************
	function closeModal() {
		setOpenLogin(false);
		setOpenSignup(false);
	}

	// ************************ signup ************************
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [nickname, setNickname] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [password2, setPassword2] = useState<string>("");

	const [warningName, setWarningName] = useState<boolean>(true);
	const [warningEmail, setWarningEmail] = useState<boolean>(true);
	const [warningNickname, setWarningNickname] = useState<boolean>(true);
	const [warningPassword, setWarningPassword] = useState<boolean>(true);
	const [warningPassword2, setWarningPassword2] = useState<boolean>(true);
	const [emailWarningMsg, setEmailWarningMsg] = useState<string>("");
	const [nicknameWarningMsg, setNicknameWarningMsg] = useState<string>("");
	const [passwordWarningMsg, setPasswordWarningMsg] = useState<string>("");

	function validation() {
		if (name.length === 0) {
			setWarningName(false);
		}
		if (email.length === 0) {
			setEmailWarningMsg("* 이메일을 입력하세요");
			setWarningEmail(false);
		}
		if (nickname.length === 0) {
			setNicknameWarningMsg("* 닉네임을 입력하세요");
			setWarningNickname(false);
		}
		if (password.length === 0) {
			setPasswordWarningMsg("* 비밀번호를 설정하세요");
			setWarningPassword(false);
		}
		if (password2.length === 0 || password !== password2) {
			setWarningPassword2(false);
		}
		if (
			warningName &&
			warningEmail &&
			warningNickname &&
			warningPassword &&
			warningPassword2
		) {
			return true;
		}
		return false;
	}

	function goSignUp() {
		if (validation()) {
			if (privacy) {
				setLoading(true);
				axios({
					method: "post",
					url: `${BASE_URL}/registration/`,
					data: {
						email: email,
						password1: password,
						password2: password2,
						nickname: nickname,
						name: name,
					},
				})
					.then((res) => {
						console.log(res);
						setConfirmModal(!confirmModal); // open cinfirm modal
						setLoading(false);
					})
					.catch((e) => {
						console.log(e);
						setLoading(false);
						if (e.response.data.email) {
							setEmailWarningMsg("* 이미 사용 중인 Email입니다");
							setWarningEmail(false);
						}
						if (e.response.data.password1) {
							setPasswordWarningMsg("* " + e.response.data.password1[0]);
							setWarningPassword(false);
						}
						if (e.response.data.nickname) {
							setNicknameWarningMsg("* 이미 사용 중인 닉네임입니다");
							setWarningNickname(false);
						}
					});
			} else {
				alert("개인정보 수집 및 이용 동의에 체크해주세요");
			}
		}
	}

	useEffect(() => {
		setWarningName(true);
	}, [name]);
	useEffect(() => {
		setWarningEmail(true);
	}, [email]);
	useEffect(() => {
		setWarningNickname(true);
	}, [nickname]);
	useEffect(() => {
		setWarningPassword(true);
	}, [password]);
	useEffect(() => {
		setWarningPassword2(true);
	}, [password2]);

	// ************************ Google login ************************
	const flag = useOutletContext<any>();
	const googleLogin = useGoogleLogin({
		onSuccess: async (res) => {
			// console.log(res.access_token);
			setLoading(true);
			await axios({
				method: "post",
				url: `${BASE_URL}/accounts/google/login/`,
				data: { access_token: res.access_token },
			})
				.then((res) => {
					// console.log(res);
					setLoading(false);
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

	if (loading) return <Loading />;

	return (
		<>
			{confirmModal ? (
				<Modal
					title={"YOU ARE ALMOST THERE!"}
					body={
						"작성해 주신 이메일로 인증 메일을 발송하였습니다.\n인증 후 회원가입이 완료됩니다."
					}
					button={"확인"}
					onclick={closeModal}
				/>
			) : (
				<DialogBox page="signup">
					<img src={Logo} />
					<Text>회원가입을 해주세요</Text>
					<Input noWarning={warningName} page="signup">
						<input
							value={name}
							placeholder="Name"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</Input>
					<WarningText noWarning={warningName}>* 이름을 입력하세요</WarningText>
					<Input noWarning={warningEmail} page="signup">
						<input
							value={email}
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Input>
					<WarningText noWarning={warningEmail}>{emailWarningMsg}</WarningText>
					<Input noWarning={warningNickname} page="signup">
						<input
							value={nickname}
							placeholder="Nickname"
							onChange={(e) => {
								setNickname(e.target.value);
							}}
						/>
					</Input>
					<WarningText noWarning={warningNickname}>
						{nicknameWarningMsg}
					</WarningText>
					<Input noWarning={warningPassword} page="signup">
						<input
							value={password}
							type="password"
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Input>
					<WarningText noWarning={warningPassword}>
						{passwordWarningMsg}
					</WarningText>
					<Input noWarning={warningPassword2} page="signup">
						<input
							value={password2}
							type="password"
							placeholder="Confirm Password"
							onChange={(e) => {
								setPassword2(e.target.value);
							}}
						/>
					</Input>
					<WarningText noWarning={warningPassword2}>
						* 비밀번호를 확인해 주세요
					</WarningText>
					<Privacy>
						<label>
							<input
								type="checkbox"
								id="privacy"
								checked={privacy}
								onChange={({ target: { checked } }) => setPrivacy(checked)}
							/>
							개인정보 수집 및 이용 동의
						</label>
					</Privacy>
					<Button flag={false} index={1} onClick={goSignUp}>
						회원가입
					</Button>
					<GoogleButton onClick={() => googleLogin()}>
						{/* <img src={Google} /> */}
						Google 계정으로 가입
					</GoogleButton>
				</DialogBox>
			)}
		</>
	);
}

export default Signup;
