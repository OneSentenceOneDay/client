import { DialogBox } from "./DialogBox";
import { Title, Body, Buttons, ModalContainer } from "./styled";
import { BlueBigButton, BlueSmallButton, GraySmallButton } from "./Button";
import { Input } from "./Input";
import { Backdrop } from "./Backdrop";
import { WarningText } from "pages/home/Main/styled";

// type Props = {
// 	title: string,
// 	body: string,
// 	plural: boolean,
// 	onclick: () => void,
// 	onclick2: () => void,
// 	input: boolean,
// 	placeholder: string,
// 	setState: ,
// 	warning: () => void
// }

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
				{button2 ? (
					<Buttons>
						<GraySmallButton onClick={onclick2}>{button2}</GraySmallButton>
						<BlueSmallButton onClick={onclick}>{button}</BlueSmallButton>
					</Buttons>
				) : (
					<BlueBigButton>{button}</BlueBigButton>
				)}
			</DialogBox>
			<Backdrop />
		</>
	);
}
