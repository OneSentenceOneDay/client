import styled from "styled-components";
import palette from "./../../lib/palette";

export const Name = styled.div`
	padding-top: 3rem;
	color: ${palette.gray2};
	font-size: 2.25rem;
	font-family: Pretendard-Bold;
`;

export const Nickname = styled.div`
	padding-top: 1.5rem;
	color: ${palette.gray2};
	font-size: 1.125rem;
	font-family: Pretendard-Regular;
`;
export const History = styled.div`
	padding-top: 3rem;
`;

export const HistoryItem = styled.div`
	display: inline-block;
	margin: 0rem 2.5rem;
`;
export const ItemName = styled.div`
	color: ${palette.gray2};
	font-size: 1.125rem;
	font-family: Pretendard-Regular;
`;

export const ItemCount = styled.div`
	font-family: Pretendard-bold;
	color: ${palette.blue2};
	font-size: 1.25rem;
	margin-top: 1rem;
`;

export const Sentence = styled.div<{ flag: boolean }>`
	width: 49.75rem;
	margin: 0 auto;
	padding-top: 5rem;
	min-height: ${(props) => (props.flag ? "35rem" : "")};
`;

export const Text = styled.div`
	color: ${palette.blue2};
	font-family: Pretendard-bold;
	font-size: 1.5rem;
	text-align: left;
`;

export const MiddleSection = styled.div`
	margin-top: 1.7rem;
	text-align: left;
	display: flex
	flex-direction: row;
`;

export const Eng = styled.div`
	font-family: Pretendard-bolder;
	font-size: 1.5rem;
	display: inline-block;
	margin-left: 1rem;
`;

export const Days = styled.div`
	display: flex;
	justify-content: space-between;
	width: 52.75rem;
	margin-top: 2rem;
`;

export const Day = styled.div<{ flag: boolean }>`
	width: 7.107rem;
	padding: 0.25rem;
	font-family: Pretendard-Regular;
	color: ${(props) => (props.flag ? palette.blue2 : palette.gray2)};
	border-bottom: ${(props) =>
		props.flag ? `0.125rem solid ${palette.blue2}` : ""};
	cursor: pointer;
`;
