import {
	ModalContainer,
	DialogBox,
	Backdrop,
	Text,
	SignupBut,
	Input,
} from "./styled";
import Logo from "../../../assets/images/logo.svg";
import { useState, useCallback, useRef, useEffect } from "react";
import Signup from "../Signup/Signup";

function Login({ openLogin, setOpenLogin }: any) {
	// ************ open signup modal ************
	const [openSignup, setOpenSignup] = useState<boolean>(false);
	const opensignupModal = () => {
		setOpenSignup(!openSignup);
		// document.body.style.overflow = "hidden";
	};

	const onClickToggleModal = useCallback(() => {
		setOpenLogin(!openLogin);
	}, [openLogin]);

	return (
		<ModalContainer>
			{openSignup ? (
				<Signup openSignup={openSignup} setOpenSignup={setOpenSignup} />
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
						<SignupBut onClick={opensignupModal}>회원가입</SignupBut>
					</DialogBox>
					<Backdrop
						onClick={(e: React.MouseEvent) => {
							e.preventDefault();
							if (onClickToggleModal) {
								onClickToggleModal();
							}
						}}
					/>
				</>
			)}
		</ModalContainer>
	);
}

export default Login;
