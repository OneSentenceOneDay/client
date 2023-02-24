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
	const onClickToggleModal = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			setOpenSignup(!openSignup);
		},
		[openSignup]
	);

	// ************ close modal ************
	const outsideRef = useRef() as React.MutableRefObject<HTMLDialogElement>;
	useEffect(() => {
		if (openLogin) {
			function handleClickOutside(
				event: React.BaseSyntheticEvent | MouseEvent
			) {
				if (outsideRef.current && !outsideRef.current.contains(event.target)) {
					setOpenLogin(false);
					console.log(outsideRef.current);
					console.log(1);
				}
			}
			document.addEventListener("click", handleClickOutside);
			return () => {
				document.removeEventListener("click", handleClickOutside);
			};
		}
	}, [outsideRef]);

	return (
		<ModalContainer>
			{openSignup ? (
				<Signup />
			) : (
				<>
					<DialogBox page={"login"} ref={outsideRef}>
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
