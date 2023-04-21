import { DialogBox } from "./DialogBox";
import { Title, Body, Buttons, ModalContainer } from "./styled";
import { Button } from "./Button";
import { Input } from "./Input";
import { Backdrop } from "./Backdrop";
import { WarningText } from "pages/home/Main/styled";

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
	warning,
}: any) {
	return (
		<>
			<DialogBox page={"modal"}>
				{title && <Title>{title}</Title>}
				<Body flag={title ? false : true}>{body}</Body>
				{input && (
					<Input noWarning={warning} page="modal">
						<input
							placeholder={placeholder}
							onChange={(e) => {
								setState(e.target.value);
							}}
						/>
						<WarningText noWarning={warning} page="login">
							* 중복이거나 잘못된 닉네임입니다
						</WarningText>
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
			<Backdrop />
		</>
	);
}
