import { Input } from "../Login/styled";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { WarningText } from "pages/home/Main/styled";

const BASE_URL = process.env.REACT_APP_API;

function Password() {
	const [oldPassword, setOldPassword] = useState<string>("");
	const [newPassword1, setNewPassword1] = useState<string>("");
	const [newPassword2, setNewPassword2] = useState<string>("");

	function changePassword() {
		if (validation()) {
			console.log(1);
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
					console.log(res);
					alert(res.data.detail);
				})
				.catch((e) => {
					console.log(e);
					alert(e.data.old_password);
					alert(e.data.new_password2);
				});
		}
	}

	// ************************ validation ************************
	const [warningOldPassword, setWarningOldPassword] = useState<boolean>(true);
	const [warningNewPassword, setWarningNewPassword] = useState<boolean>(true);
	const [warningOldPasswordMsg, setWarningOldPasswordMsg] =
		useState<string>("");
	const [warningNewPasswordMsg, setWarningNewPasswordMsg] =
		useState<string>("");

	function validation() {
		if (oldPassword.length === 0) {
			setWarningOldPassword(false);
			setWarningOldPasswordMsg("* 비밀번호를 입력해주세요");
		} else {
			setWarningOldPassword(true);
			setWarningOldPasswordMsg("");
		}
		if (
			newPassword1.length === 0 ||
			(newPassword1.length !== 0 && newPassword1 !== newPassword2)
		) {
			setWarningNewPassword(false);
			setWarningNewPasswordMsg(
				newPassword1.length === 0
					? "* 비밀번호를 입력해주세요"
					: "* 비밀번호가 일치하지 않습니다"
			);
		} else {
			setWarningNewPassword(true);
			setWarningNewPasswordMsg("");
		}
		if (warningOldPassword && warningNewPassword) {
			console.log(2);
			return true;
		}
		return false;
	}
	console.log(warningNewPassword);
	return (
		<Wrap>
			<Text>비밀번호 변경</Text>
			<Input noWarning={warningOldPassword} page={"password"}>
				<input
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
					type="password"
					placeholder="New Password"
					onChange={(e) => {
						setNewPassword1(e.target.value);
					}}
				/>
			</Input>
			<Input noWarning={warningNewPassword} page={"password"}>
				<input
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
