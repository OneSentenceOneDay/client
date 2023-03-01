import { DialogBox } from "pages/auth/Login/styled";
import { Title, Body, Button, Buttons, ModalContainer } from "./styled";
import { Backdrop } from "../pages/auth/Login/styled";

export function Modal({
	title,
	body,
	button,
	button2,
	onclick,
	onclick2,
}: any) {
	return (
		<ModalContainer>
			<DialogBox page={"modal"}>
				<Title>{title}</Title>
				<Body>{body}</Body>
				<Buttons>
					{button2 && (
						<Button flag={true} index={2} onClick={onclick2}>
							{button2}
						</Button>
					)}
					<Button
						flag={button2 ? true : false}
						index={button2 ? 1 : 2}
						onClick={onclick}
					>
						{button}
					</Button>
				</Buttons>
			</DialogBox>
			<Backdrop />
		</ModalContainer>
	);
}
