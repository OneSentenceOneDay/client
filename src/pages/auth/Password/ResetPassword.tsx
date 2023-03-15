import { Input } from "../Login/styled";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";
import axios from "axios";
import { useState } from "react";
import { WarningText } from "pages/home/Main/styled";
import { useNavigate, useParams } from "react-router-dom";
import Password from "./ChangePassword";
import { Modal } from "components/Modal";
import Loading from "components/Loading";

const BASE_URL = process.env.REACT_APP_API;

function ResetPassword() {
	const [loading, setLoading] = useState(false);

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

	// ************************ reset password ************************
	const navigate = useNavigate();

	function reset() {
		if (validation()) {
			setLoading(true);
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
					// console.log(res);
					setLoading(false);
					setConfirmModal(true);
					// alert("비밀번호가 변경되었습니다.");
				})
				.catch((e) => {
					setWarning(false);
					setLoading(false);
					if (e.response.data.new_password2) {
						setWarningMsg("* " + e.response.data.new_password2[0]);
					}
					console.log(e.response.data.new_password2[0]);
				});
		}
	}

	// ************************ confirm modal ************************
	const [confirmModal, setConfirmModal] = useState<boolean>(false);
	function closeModal() {
		setConfirmModal(false);
		navigate("/");
	}

	if (loading) return <Loading />;

	console.log(confirmModal);
	return (
		<Wrap>
			<Text>비밀번호 변경</Text>
			{confirmModal && (
				<Modal
					body="비밀번호가 변경되었습니다."
					button="확인"
					onclick={closeModal}
				/>
			)}
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
