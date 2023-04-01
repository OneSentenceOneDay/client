import { Input } from "components/Input";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { WarningText } from "pages/home/Main/styled";
import { useNavigate } from "react-router-dom";
import { Modal } from "components/Modal";
import Loading from "components/Loading";
import tokenNotValid from "apis/tokenNotValid";

const BASE_URL = process.env.REACT_APP_API;

function Password() {
	const [loading, setLoading] = useState(false);

	// ************************ validation ************************
	const [warningOldPassword, setWarningOldPassword] = useState<boolean>(true);
	const [warningNewPassword, setWarningNewPassword] = useState<boolean>(true);
	const [warningOldPasswordMsg, setWarningOldPasswordMsg] =
		useState<string>("");
	const [warningNewPasswordMsg, setWarningNewPasswordMsg] =
		useState<string>("");

	function validation() {
		let flag = true;
		if (oldPassword.length === 0) {
			setWarningOldPassword(false);
			setWarningOldPasswordMsg("* 비밀번호를 설정해주세요");
			flag = false;
		}
		if (newPassword1.length === 0 || newPassword2.length === 0) {
			setWarningNewPassword(false);
			setWarningNewPasswordMsg("* 비밀번호를 설정해주세요");
			flag = false;
		}
		if (newPassword1.length !== 0 && newPassword1 !== newPassword2) {
			setWarningNewPassword(false);
			setWarningNewPasswordMsg("* 비밀번호가 일치하지 않습니다");
			flag = false;
		}
		if (flag) {
			return true;
		}

		return false;
	}
	// ************************ change password ************************
	const [oldPassword, setOldPassword] = useState<string>("");
	const [newPassword1, setNewPassword1] = useState<string>("");
	const [newPassword2, setNewPassword2] = useState<string>("");
	const navigate = useNavigate();

	function changePassword() {
		if (validation()) {
			setLoading(true);
			axios({
				method: "post",
				url: `${BASE_URL}/password/change/`,
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
				},
				data: {
					old_password: oldPassword,
					new_password1: newPassword1,
					new_password2: newPassword2,
				},
			})
				.then((res) => {
					// console.log(res);
					setLoading(false);
					// alert("비밀번호가 변경되었습니다.");
					setConfirmModal(true);
				})
				.catch((e) => {
					if (e.response.data.old_password) {
						setWarningOldPasswordMsg("* " + e.response.data.old_password[0]);
						setWarningOldPassword(false);
					}
					if (e.response.data.new_password2) {
						setWarningNewPasswordMsg("* " + e.response.data.new_password2[0]);
						setWarningNewPassword(false);
					}
					if (e.response.data.code === "token_not_valid") {
						tokenNotValid();
						navigate("/");
						window.location.reload(); // 새로고침
					}
					setLoading(false);
				});
		}
	}

	useEffect(() => {
		setWarningOldPassword(true);
	}, [oldPassword]);
	useEffect(() => {
		setWarningNewPassword(true);
	}, [newPassword1, newPassword2]);

	// ************************ confirm modal ************************
	const [confirmModal, setConfirmModal] = useState<boolean>(false);
	function closeModal() {
		setConfirmModal(false);
		navigate("/");
	}

	if (loading) return <Loading />;
	return (
		<Wrap>
			{confirmModal && (
				<Modal
					body="비밀번호가 변경되었습니다."
					button="확인"
					onclick={closeModal}
				/>
			)}
			<Text>비밀번호 변경</Text>
			<Input noWarning={warningOldPassword} page={"password"}>
				<input
					value={oldPassword}
					type="password"
					placeholder="Old Password"
					onChange={(e) => {
						setOldPassword(e.target.value);
					}}
				/>
			</Input>
			<WarningText noWarning={warningOldPassword} page="password">
				{warningOldPasswordMsg}
			</WarningText>
			<Input noWarning={warningNewPassword} page={"password"}>
				<input
					value={newPassword1}
					type="password"
					placeholder="New Password"
					onChange={(e) => {
						setNewPassword1(e.target.value);
					}}
				/>
			</Input>
			<Input noWarning={warningNewPassword} page={"password"}>
				<input
					value={newPassword2}
					type="password"
					placeholder="Confirm New Password"
					onChange={(e) => {
						setNewPassword2(e.target.value);
					}}
				/>
			</Input>
			<WarningText noWarning={warningNewPassword} page="password">
				{warningNewPasswordMsg}
			</WarningText>
			<Button onClick={changePassword}>새 비밀번호로 변경</Button>
			<FooterComponent />
		</Wrap>
	);
}

export default Password;
