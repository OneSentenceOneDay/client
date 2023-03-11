import { Input } from "../Login/styled";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { WarningText } from "pages/home/Main/styled";

const BASE_URL = process.env.REACT_APP_API;

function ResetPassword() {
	const [newPassword1, setNewPassword1] = useState<string>("");
	const [newPassword2, setNewPassword2] = useState<string>("");

	function reset() {
		axios({
			method: "post",
			url: `${BASE_URL}/password/reset/confirm/uid=<str:uid>&token=<str:token>/`,
			data: {
				new_password1: newPassword1,
				new_password2: newPassword2,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	return (
		<Wrap>
			<Text>비밀번호 변경</Text>
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
			<WarningText noWarning={true} page="password">
				{}
			</WarningText>
			<Button onClick={reset}>새 비밀번호로 변경</Button>
			<FooterComponent />
		</Wrap>
	);
}

export default ResetPassword;
