import { Input } from "../Login/styled";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";
import axios from "axios";
import { useState } from "react";

const BASE_URL = process.env.REACT_APP_API;

function Password() {
	const [oldPassword, setOldPassword] = useState<string>("");
	const [newPassword1, setNewPassword1] = useState<string>("");
	const [newPassword2, setNewPassword2] = useState<string>("");

	function changePassword() {
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

	return (
		<Wrap>
			<Text>비밀번호 변경</Text>
			<Input noWarning={true} page={"password"}>
				<input
					type="password"
					placeholder="Old Password"
					onChange={(e) => {
						setOldPassword(e.target.value);
					}}
				/>
			</Input>
			<Input noWarning={true} page={"password"}>
				<input
					type="password"
					placeholder="New Password"
					onChange={(e) => {
						setNewPassword1(e.target.value);
					}}
				/>
			</Input>
			<Input noWarning={true} page={"password"}>
				<input
					type="password"
					placeholder="Confirm New Password"
					onChange={(e) => {
						setNewPassword2(e.target.value);
					}}
				/>
			</Input>
			<Button onClick={changePassword}>새 비밀번호로 변경</Button>
			<FooterComponent />
		</Wrap>
	);
}

export default Password;
