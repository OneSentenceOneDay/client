import styled from "styled-components";
import palette from "../../../lib/palette";

export const Wrap = styled.div`
	background-color: ${palette.blue1};
	width: 100vw;
	height: 100vh;
	margin-left: -0.55vw;
	text-align: center;
`;

export const TodayStc = styled.div`
	padding-top: 9vh;
`;

export const Today = styled.div`
	font-size: 1vw;
	height: 3vh;
	line-height: 3vh;
	width: 8.5vw;
	margin: 0 auto;
	border-bottom: 1px solid ${palette.gray1};
	font-family: Pretendard-Regular;
`;

export const Text = styled.div`
	font-size: 1vw;
	margin-top: 2vh;
	font-family: Pretendard-Regular;
`;

export const Eng = styled.div`
	font-size: 2vw;
	margin-top: 4vh;
	font-family: Pretendard-Bold;
`;

export const Sentence = styled.div`
	margin-top: 2vh;
	font-family: times-new-roman;
`;

export const Source = styled.div`
	margin-top: 1vh;
	font-family: times-new-roman-italic;
`;
