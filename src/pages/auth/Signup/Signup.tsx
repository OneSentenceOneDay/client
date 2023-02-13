import { DialogBox, Text, Backdrop, Input } from "../Login/styled";
import { Privacy } from "./styled";
import Logo from "../../../assets/images/logo.svg";
import { useState } from "react";

const Signup = () => {
	const [privacy, setPrivacy] = useState(false);
	return (
		<>
			<DialogBox page="signup">
				<img src={Logo} />
				<Text>회원가입을 해주세요</Text>
				<Input>
					<input placeholder="이름" />
					<input placeholder="Email" />
					<input placeholder="닉네임" />
					<input type="password" placeholder="비밀번호" />
					<input type="password" placeholder="비밀번호 확인" />
				</Input>
				<Privacy>
					<input
						type="checkbox"
						id="privacy"
						checked={privacy}
						onChange={({ target: { checked } }) => setPrivacy(checked)}
					/>
					개인정보 수집 및 이용 동의
				</Privacy>
				<button>회원가입</button>
				<button>구글 로그인</button>
			</DialogBox>
			<Backdrop
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					// if (onClickToggleModal) {
					// 	onClickToggleModal();
					// }
				}}
			/>
		</>
	);
};

export default Signup;
