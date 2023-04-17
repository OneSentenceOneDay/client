import styled from "styled-components";
import palette from "lib/palette";

type tooltip = {
	closeTooltip: () => void;
};

function Tooltip({ closeTooltip }: tooltip) {
	return (
		<TooltipBox>
			<Text>
				{
					"영문장 만들기가 어려운가요? AI teacher를 사용해 보세요.\n방법1. 조금 서툴긴 하지만 영어로 써본 후 클릭한다.\n방법2. 도무지 뭘 써야 할지 모르겠다면 한글로 써본 후 클릭!"
				}
			</Text>
			<Close onClick={closeTooltip}>✕</Close>
		</TooltipBox>
	);
}

export default Tooltip;

const TooltipBox = styled.dialog`
	z-index: 1000;
	display: flex;
	width: 26rem;
	background-color: rgba(0, 0, 0, 0.55);
	border: none;
	border-radius: 0.625rem;
	color: #ffffff;
	position: absolute;
	// top: 10rem;
	margin-top: 5.5rem;
	right: 24.5rem;
	&:: after {
		content: "";
		position: absolute;
		border-style: solid;
		border-width: 12px 9px 0;
		border-color: rgba(0, 0, 0, 0.55) transparent;
		display: block;
		width: 0;
		z-index: 1;
		bottom: -12px;
		left: 41px;
	}
`;

const Text = styled.div`
	font-size: 1rem;
	// width: 23.25rem;
	white-space: pre-line;
	text-align: left;
	line-height: 1.5rem;
	font-family: Pretendard-Light;
	color: #ffffff;
`;

const Close = styled.div`
	font-family: Pretendard-Bold;
	margin-left: 2rem;
	font-size: 1rem;
	cursor: pointer;
	height: 1rem;
`;
