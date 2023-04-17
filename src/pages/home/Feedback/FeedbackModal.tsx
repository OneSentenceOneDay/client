import { Backdrop } from "components/Backdrop";
import { Button } from "components/Button";
import { DialogBox } from "components/DialogBox";
import { Text, Emoji, Up, TextArea } from "./styled";
import { useCallback } from "react";

interface IModalProps {
	closeModal: () => void;
}

function FeedbackModal({ closeModal }: IModalProps) {
	const onClickToggleModal = useCallback(() => {
		closeModal();
	}, []);

	return (
		<>
			<DialogBox page="modal">
				<Up>
					<Emoji>👩🏻‍💻</Emoji>
					<Text>
						{
							"osod에서 영어 학습을 하면서 느낀\n좋은 점 또는 불편한 점을 남겨주세요."
						}
					</Text>
				</Up>
				<TextArea />
				<Button flag={false} index={1}>
					피드백 보내기
				</Button>
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
	);
}

export default FeedbackModal;
