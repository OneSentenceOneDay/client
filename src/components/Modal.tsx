import { DialogBox } from "pages/auth/Login/styled";
import { Title, Body } from "./styled";

export function Modal() {
	return (
		<DialogBox page={"modal"}>
			<Title>You are almost there!</Title>
			<Body>
				{
					"작성해 주신 이메일로 인증 메일을 발송하였습니다\n인증 후 회원가입이 완료됩니다"
				}
			</Body>
		</DialogBox>
	);
}
