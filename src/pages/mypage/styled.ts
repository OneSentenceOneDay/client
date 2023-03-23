import styled from "styled-components";
import palette from "./../../lib/palette";

export const Name = styled.div`
	padding-top: 3rem;
	color: ${palette.gray2};
	font-size: 2.25rem;
	font-family: Pretendard-Bold;
	img {
		cursor: pointer;
	}
	@media only screen and (max-width: 700px) {
		font-size: 1.3rem;
		padding-top: 2rem;
	}
`;

export const Nickname = styled.div`
	padding-top: 1.5rem;
	color: ${palette.gray2};
	font-size: 1.125rem;
	font-family: Pretendard-Regular;
	@media only screen and (max-width: 700px) {
		font-size: 0.8rem;
		padding-top: 1rem;
	}
`;
export const History = styled.div`
	padding-top: 3rem;
`;

export const HistoryItem = styled.div`
	display: inline-block;
	margin: 0rem 2.5rem;
	@media only screen and (max-width: 700px) {
		margin: 0rem 1rem;
	}
`;
export const ItemName = styled.div`
	color: ${palette.gray2};
	font-size: 1.125rem;
	font-family: Pretendard-Regular;
	@media only screen and (max-width: 700px) {
		font-size: 0.8rem;
	}
`;

export const ItemCount = styled.div`
	font-family: Pretendard-bold;
	color: ${palette.blue2};
	font-size: 1.25rem;
	margin-top: 1rem;
	img {
		height: 1rem;
	}
	@media only screen and (max-width: 700px) {
		font-size: 0.9rem;
		img {
			height: 0.8rem;
		}
	}
`;

export const Sentence = styled.div<{ flag: boolean }>`
	width: 52.75rem;
	margin: 0 auto;
	padding-top: 5rem;
	min-height: ${(props) => (props.flag ? "35rem" : "")};
	@media only screen and (max-width: 700px) {
		width: 20.5rem;
		min-height: ${(props) => (props.flag ? "18rem" : "")};
	}
`;

export const Text = styled.div`
	color: ${palette.blue2};
	font-family: Pretendard-bold;
	font-size: 1.5rem;
	text-align: left;
	@media only screen and (max-width: 700px) {
		font-size: 1rem;
	}
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
	@media only screen and (max-width: 700px) {
		font-size: 1rem;
	}
`;

export const Days = styled.div`
	display: flex;
	justify-content: space-between;
	width: 52.75rem;
	margin-top: 2rem;
	@media only screen and (max-width: 700px) {
		width: 20.5rem;
	}
`;

export const Day = styled.div<{ flag: boolean }>`
	width: 7.107rem;
	padding: 0.25rem;
	font-family: Pretendard-Regular;
	color: ${(props) => (props.flag ? palette.blue2 : palette.gray2)};
	border-bottom: ${(props) =>
		props.flag ? `0.125rem solid ${palette.blue2}` : ""};
	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.flag ? "" : "rgba(116, 138, 255, 0.05)"};
	}
	@media only screen and (max-width: 700px) {
		width: 22rem;
		font-size: 0.7rem;
	}
`;

export const NoTodayPost = styled.div`
	// background-color: red;
	height: 10rem;
	line-height: 10rem;
	font-family: Pretendard-Light;
	color: ${palette.gray1};
	@media only screen and (max-width: 700px) {
		font-size: 0.8rem;
	}
`;
