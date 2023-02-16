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
					<input placeholder="Name" />
					<input placeholder="Email" />
					<input placeholder="Nickname" />
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Confirm Password" />
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
				}}
			/>
		</>
	);
};

export default Signup;
