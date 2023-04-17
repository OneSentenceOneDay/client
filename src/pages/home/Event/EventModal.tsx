import { Backdrop } from "components/Backdrop";
import { Button } from "components/Button";
import { DialogBox } from "components/DialogBox";
import { EventIcon, Text1, Text2, Text3, CloseModal } from "./styled";
import { useCallback } from "react";

type modalProps = {
	closeModal: () => void;
	closeModalUntilExpires: () => void;
};

function EventModal({ closeModal, closeModalUntilExpires }: modalProps) {
	const onClickToggleModal = useCallback(() => {
		closeModal();
		document.body.style.overflow = "unset";
	}, []);

	return (
		<>
			<DialogBox page="modal">
				<EventIcon>EVENT</EventIcon>
				<Text1>하루 한 문장 영작 챌런지!</Text1>
				<Text2>osod 출시 기념 이벤트</Text2>
				<Text3 flag={false}>
					{
						"안녕하세요?\n하루 한 문장으로 영어 학습을 할 수 있는\n‘osod(one sentence one day)’입니다!\n\n매일 새로운 구문으로"
					}
				</Text3>
				<Text3 flag={true}>
					한 달 동안 열심히 영작하고 상품도 받으세요! 🙌
				</Text3>
				<Button flag={false} index={1} onClick={closeModal}>
					영작 하러 가기
				</Button>
				<CloseModal>
					<label>
						<input type="checkbox" onClick={closeModalUntilExpires} />
						하루 동안 보지 않기
					</label>
					<div onClick={closeModal}>닫기</div>
				</CloseModal>
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

export default EventModal;
