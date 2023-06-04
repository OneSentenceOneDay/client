import { Wrap } from "components/styled";
import { Input } from "components/Input";
import { InnerWrap } from "../Login/styled";
import { Text } from "./styled";
import { BlueBigButton } from "components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "components/Modal";

const BASE_URL = process.env.REACT_APP_API;

function ResetPasswordPage() {
	const [email, setEmail] = useState<string>("");
	const [confirmModal, setConfirmModal] = useState<boolean>(false);
	const navigate = useNavigate();

	function CloseConfirmModal() {
		setConfirmModal(true);
		navigate("/");
	}

	function resetPassword() {
		axios({
			method: "post",
			url: `${BASE_URL}/password/reset/`,
			data: { email: email },
		})
			.then((res) => {
				setConfirmModal(true);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	return (
		<Wrap>
			{confirmModal && (
				<Modal
					body={"가입한 이메일로 \n비밀번호를 재설정 링크를 보냈습니다"}
					button={"확인"}
					onclick={CloseConfirmModal}
				/>
			)}
			<InnerWrap>
				<Text>가입하신 Email 주소를 입력해주세요</Text>
				<Input page="login" noWarning={true}>
					<input
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Input>
				<BlueBigButton onClick={resetPassword}>확인</BlueBigButton>
			</InnerWrap>
		</Wrap>
	);
}

export default ResetPasswordPage;
