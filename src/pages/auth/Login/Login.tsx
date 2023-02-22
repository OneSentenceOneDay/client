import {
	ModalContainer,
	DialogBox,
	Backdrop,
	Text,
	SignupBut,
	Input,
} from "./styled";
import Logo from "../../../assets/images/logo.svg";
import { useState, useCallback } from "react";
import Signup from "../Signup/Signup";

function Login() {
	// ************ open signup modal ************
	const [openSignup, setOpenSignup] = useState<boolean>(false);
	const onClickToggleModal = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			setOpenSignup(!openSignup);
		},
		[openSignup]
	);

	return (
		<ModalContainer>
			{openSignup ? (
				<Signup />
			) : (
				<>
					<DialogBox page={"login"}>
						<img src={Logo} />
						<Text>로그인하셔야 해요</Text>
						<Input>
							<input placeholder="Email" />
							<input placeholder="Password" />
						</Input>

						<button>로그인</button>
						<button>구글 로그인</button>
						<SignupBut onClick={onClickToggleModal}>회원가입</SignupBut>
					</DialogBox>
					<Backdrop
						onClick={(e: React.MouseEvent) => {
							// e.preventDefault();
							// if (onClickToggleModal) {
							// 	onClickToggleModal();
							// }
						}}
					/>
				</>
			)}
		</ModalContainer>
	);
}

export default Login;
