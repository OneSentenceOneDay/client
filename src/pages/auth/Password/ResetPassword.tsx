import { Input } from "../Login/styled";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";
import axios from "axios";
import { useState } from "react";
import { WarningText } from "pages/home/Main/styled";
import { useParams } from "react-router-dom";
import Password from "./Password";

const BASE_URL = process.env.REACT_APP_API;

function ResetPassword() {
	const [newPassword1, setNewPassword1] = useState<string>("");
	const [newPassword2, setNewPassword2] = useState<string>("");

	const params = useParams();
	const uid = params.uid;
	const token = params.token;

	// ************************ validation ************************
	const [warning, setWarning] = useState<boolean>(true);
	const [warningMsg, setWarningMsg] = useState<string>("");

	function validation() {
		if (newPassword1.length === 0 || newPassword2.length === 0) {
			setWarning(false);
			setWarningMsg("* 비밀번호를 설정해주세요");
			return false;
		}
		if (newPassword1 !== newPassword2) {
			setWarning(false);
			setWarningMsg("* 비밀번호가 일치하지 않습니다");
			return false;
		}
		return true;
	}

	function reset() {
		if (validation()) {
			axios({
				method: "post",
				url: `${BASE_URL}/password/reset/${uid}/${token}/`,
				data: {
					new_password1: newPassword1,
					new_password2: newPassword2,
					uid: uid,
					token: token,
				},
			})
				.then((res) => {
					console.log(res);
					alert("비밀번호가 변경되었습니다.");
				})
				.catch((e) => {
					setWarning(false);
					if (e.response.data.new_password2) {
						setWarningMsg("* " + e.response.data.new_password2[0]);
					}
					console.log(e.response.data.new_password2[0]);
				});
		}
	}

	return (
		<Wrap>
			<Text>비밀번호 변경</Text>
			<Input noWarning={warning} page={"password"}>
				<input
					type="password"
					placeholder="New Password"
					onChange={(e) => {
						setNewPassword1(e.target.value);
					}}
				/>
			</Input>
			<Input noWarning={warning} page={"password"}>
				<input
					type="password"
					placeholder="Confirm New Password"
					onChange={(e) => {
						setNewPassword2(e.target.value);
					}}
				/>
			</Input>
			<WarningText noWarning={warning} page="password">
				{warningMsg}
			</WarningText>
			<Button onClick={reset}>새 비밀번호로 변경</Button>
			<FooterComponent />
		</Wrap>
	);
}

export default ResetPassword;
