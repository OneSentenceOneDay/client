import { DialogBox } from "pages/auth/Login/styled";
import { Title, Body, Button, Buttons, ModalContainer } from "./styled";
import { Input } from "./Input";
import { Backdrop } from "../pages/auth/Login/styled";

export function Modal({
	title,
	body,
	button,
	button2,
	onclick,
	onclick2,
	input,
	setState,
	placeholder,
}: any) {
	return (
		<>
			<DialogBox page={"modal"}>
				{title && <Title>{title}</Title>}
				<Body>{body}</Body>
				{input && (
					<Input noWarning={true} page="modal">
						<input
							placeholder={placeholder}
							onChange={(e) => {
								setState(e.target.value);
							}}
						/>
					</Input>
				)}
				<Buttons>
					{button2 && (
						<Button flag={true} index={2} onClick={onclick2}>
							{button2}
						</Button>
					)}
					<Button
						flag={button2 ? true : false}
						index={button2 ? 1 : 1}
						onClick={onclick}
					>
						{button}
					</Button>
				</Buttons>
			</DialogBox>
			{/* <Backdrop /> */}
		</>
	);
}
