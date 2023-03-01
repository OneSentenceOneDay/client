import { DialogBox } from "pages/auth/Login/styled";
import { Title, Body, Button, Buttons } from "./styled";

export function Modal({ title, body, button, button2 }: any) {
	return (
		<DialogBox page={"modal"}>
			<Title>{title}</Title>
			<Body>{body}</Body>
			<Buttons>
				{button2 && (
					<Button flag={true} index={2}>
						{button2}
					</Button>
				)}
				<Button flag={button2 ? true : false} index={!button2 ? 1 : 2}>
					{button}
				</Button>
			</Buttons>
		</DialogBox>
	);
}
