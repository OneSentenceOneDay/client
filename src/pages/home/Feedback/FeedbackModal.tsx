import { Backdrop } from "components/Backdrop";
import { BlueBigButton } from "components/Button";
import { DialogBox } from "components/DialogBox";
import { Text, Emoji, Up, TextArea } from "./styled";
import { useCallback, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

type IModalProps = {
	closeModal: () => void;
	setConfirm: Dispatch<SetStateAction<boolean>>;
};

function FeedbackModal({ closeModal, setConfirm }: IModalProps) {
	const onClickToggleModal = useCallback(() => {
		closeModal();
	}, []);

	const [feedback, setFeedback] = useState<string>("");

	async function sendFeedback() {
		await axios({
			method: "post",
			url: `${BASE_URL}//accounts/feedback/`,
			data: { body: feedback },
		})
			.then(() => {
				setConfirm(true);
				closeModal();
			})
			.catch(() => {
				alert("내용을 작성해주세요.");
			});
	}

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
				<TextArea
					onChange={(e) => {
						setFeedback(e.target.value);
					}}
				/>
				<BlueBigButton onClick={sendFeedback}>피드백 보내기</BlueBigButton>
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
