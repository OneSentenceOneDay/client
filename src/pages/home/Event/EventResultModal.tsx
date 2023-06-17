import { Backdrop } from "components/Backdrop";
import { DialogBox } from "components/DialogBox";
import { useCallback } from "react";
import Trophy from "assets/images/trophy.svg";
import styled from "styled-components";
import palette from "lib/palette";

type modalProps = {
	closeModal: () => void;
};

function EventResultModal({ closeModal }: modalProps) {
	const onClickToggleModal = useCallback(() => {
		closeModal();
	}, []);

	return (
		<>
			<DialogBox page="eventModal">
				<Text bold={false}>하루 한 문장 영작 챌런지!</Text>
				<Text bold={true}>둘째 주 당첨자 확인</Text>
				<Img>
					<img src={Trophy} />
				</Img>
				<Item position="up">
					<Text2 bold={true}>4일 이상 출석 주인공은?</Text2>
					<Text2 bold={false}>축하합니다!👏👏👏</Text2>
					<NameSection>
						<Name>손흥민</Name>
						<Nim>님</Nim>
					</NameSection>
				</Item>
				<Item position="down">
					<Text2 bold={true}>가장 많이 좋아요를 받은 학습자는?</Text2>
					<Text2 bold={false}>축하합니다!👏👏👏</Text2>
					<NameSection>
						<Name>김치주세요</Name>
						<Nim>님</Nim>
					</NameSection>
				</Item>
				<Text3>2023년 0월 0일 까지 email로 상품을 보내 드립니다!</Text3>
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

export default EventResultModal;

const Text = styled.div<{ bold: boolean }>`
	font-family: ${(props) =>
		props.bold ? "Pretendard-Bold" : "Pretendard-Regular"};
	font-size: 1.25rem;
	color: ${palette.blue2};
	margin-top: 0.2rem;
	@media only screen and (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

const Img = styled.div`
	margin: 1rem 0rem;
	img {
		width: 5rem;
	}
	@media only screen and (max-width: 768px) {
		img {
			width: 4rem;
		}
	}
`;

const Item = styled.div<{ position: string }>`
	background-color: ${palette.blue1};
	// linear-gradient(
	// 	180deg,
	// 	#eaecff 0%,
	// 	#f0f2ff 8.85%,
	// 	#f5f6ff 100%
	// );
	padding: 1.875rem 0rem;
	width: 28rem;
	border-radius: ${(props) =>
		props.position === "up"
			? "0.625rem 0.625rem 0rem 0rem"
			: "0rem 0rem 0.625rem 0.625rem "};
	@media only screen and (max-width: 768px) {
		width: 18rem;
	}
`;

const Text2 = styled.div<{ bold: boolean }>`
	font-family: ${(props) =>
		props.bold ? "Pretendard-Bold" : "Pretendard-Regular"};
	color: ${palette.blue8};
	margin-bottom: 0.6rem;
	font-size: 1.15rem;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

const NameSection = styled.div`
	background-color: #ffffff;
	width: 16rem;
	margin: 0 auto;
	padding: 0.7rem 0rem;
	border-radius: 0.625rem;
	margin-top: 0.5rem;
	@media only screen and (max-width: 768px) {
		width: 12rem;
	}
`;

const Name = styled.div`
	display: inline-block;
	font-family: Pretendard-Bold;
	font-size: 1.2rem;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;
const Nim = styled.div`
	display: inline-block;
	font-family: Pretendard-Regular;
	font-size: 1rem;
	margin-left: 0.2rem;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

const Text3 = styled.div`
	font-family: Pretendard-Regular;
	font-size: 0.95rem;
	color: ${palette.gray1};
	margin-top: 1.5rem;
	@media only screen and (max-width: 768px) {
		margin-top: 1rem;
		font-size: 0.8rem;
	}
`;
