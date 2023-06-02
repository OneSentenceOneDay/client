import { Text } from "../Login/styled";
import { Privacy, WarningText } from "./styled";
import { BlueBigButton, GoogleButton } from "components/Button";
import Logo from "assets/images/logo.svg";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "components/Modal";
import axios from "axios";
import Google from "assets/icons/google-icon.svg";
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

	const [nameWarningMsg, setNameWarningMsg] = useState<string>("");
	const [emailWarningMsg, setEmailWarningMsg] = useState<string>("");
	const [nicknameWarningMsg, setNicknameWarningMsg] = useState<string>("");
	const [passwordWarningMsg, setPasswordWarningMsg] = useState<string>("");

	function goSignUp() {
		setWarningName(true);
		setWarningEmail(true);
		setWarningNickname(true);
		setWarningPassword(true);
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
				})
				.catch((e) => {
					if (password !== password2) {
						setPasswordWarningMsg("* 비밀번호가 일치하지 않습니다.");
						setWarningPassword(false);
						setPassword("");
						setPassword2("");
					}
					if (e.response.data.name) {
						setNameWarningMsg("* " + e.response.data.name[0]);
						setWarningName(false);
						setName("");
					}
					if (e.response.data.email) {
						setEmailWarningMsg("* " + e.response.data.email[0]);
						setWarningEmail(false);
						setEmail("");
					}
					if (e.response.data.password1) {
						setPasswordWarningMsg("* " + e.response.data.password1[0]);
						setWarningPassword(false);
						setPassword("");
						setPassword2("");
					}
					if (e.response.data.nickname) {
						setNicknameWarningMsg("* " + e.response.data.nickname[0]);
						setWarningNickname(false);
						setNickname("");
					}
				});
			setLoading(false);
		} else {
			alert("개인정보 수집 및 이용 동의에 체크해주세요");
		}
	}

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
					localStorage.setItem("access_token", res.data.access_token);
					localStorage.setItem("refresh_token", res.data.refresh_token);
					localStorage.setItem("id", res.data.user.id);
					localStorage.setItem("email", res.data.user.email);
					localStorage.setItem("nickname", res.data.user.nickname);
					localStorage.setItem("subscription", res.data.user.subscription);

					flag[1](false); // cloase login modal
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
					<WarningText noWarning={warningName}>{nameWarningMsg}</WarningText>
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
					<Input noWarning={warningPassword} page="signup">
						<input
							value={password2}
							type="password"
							placeholder="Confirm Password"
							onChange={(e) => {
								setPassword2(e.target.value);
							}}
						/>
					</Input>
					<WarningText noWarning={warningPassword}>
						{passwordWarningMsg}
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
					<BlueBigButton onClick={goSignUp}>회원가입</BlueBigButton>
					<GoogleButton onClick={() => googleLogin()}>
						<img src={Google} />
						Google 계정으로 가입
					</GoogleButton>
				</DialogBox>
			)}
		</>
	);
}

export default Signup;
