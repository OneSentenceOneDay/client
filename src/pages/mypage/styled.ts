import styled from "styled-components";
import palette from "./../../lib/palette";

export const Name = styled.div`
	padding-top: 3rem;
	color: ${palette.gray2};
	font-size: 2.25rem;
	font-family: Pretendard-Bold;
	img {
		cursor: pointer;
		vertical-align: middle;
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
	width: 52.75rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 700px) {
		width: 20.5rem;
	}
`;

export const HistoryItem = styled.div`
	background-color: #ffffff;
	border: 0.063rem solid ${palette.gray4};
	padding: 1.25rem;
	border-radius: 0.625rem;
	width: 13.75rem;
	text-align: left;
	@media only screen and (max-width: 700px) {
		width: 6.5rem;
		text-align: center;
		padding: 0.7rem 0rem;
		img {
			width: 1.2rem;
		}
	}
`;

export const ItemIcon = styled.div`
	display: inline-block;
	font-size: 1rem;
	@media only screen and (max-width: 700px) {
		font-size: 0.875rem;
	}
`;

export const HistoryItemLong = styled(HistoryItem)`
	margin: 1.6rem auto;
	width: 50.25rem;
	@media only screen and (max-width: 700px) {
		text-align: left;
		width: 17.5rem;
		padding: 0.7rem 1.5rem;
	}
`;

export const ItemName = styled.div<{ long: boolean }>`
	color: ${palette.gray2};
	display: inline-block;
	font-size: 1.125rem;
	font-family: Pretendard-Regular;
	margin-left: 0.5rem;
	width: ${(props) => (props.long ? "4.5rem" : "7rem")};
	@media only screen and (max-width: 700px) {
		width: ${(props) => (props.long ? "3rem" : "6rem")};
		margin-top: 0.5rem;
		font-size: 0.8rem;
		margin-left: 0rem;
	}
`;

export const ItemCount = styled.div`
	display: inline-block;
	font-family: Pretendard-bold;
	color: ${palette.blue2};
	font-size: 1.25rem;
	width: 4rem;
	text-align: right;
	@media only screen and (max-width: 700px) {
		font-size: 0.9rem;
		text-align: center;
		margin-top: 0.5rem;
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

export const StampContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 48rem;
	margin: 0 auto;
	@media only screen and (max-width: 700px) {
		width: 17.5rem;
	}
`;
export const StampItem = styled.div`
	margin-top: 0.9rem;
	@media only screen and (max-width: 700px) {
		margin-top: 0rem;
	}
`;

export const Week = styled.div`
	font-family: Pretendard-Light;
	border: 0.063rem solid ${palette.blue2};
	color: ${palette.blue2};
	width: 3rem;
	margin: 1rem auto;
	text-align: center;
	padding: 0.4rem 0rem;
	border-radius: 62.438rem;
	font-size: 0.875rem;
	@media only screen and (max-width: 700px) {
		font-size: 0.625rem;
		width: 1.5rem;
		padding: 0.2rem 0rem;
	}
`;

export const Stamp = styled.div`
	img {
		width: 5rem;
	}
	@media only screen and (max-width: 700px) {
		text-align: center;
		img {
			width: 2.1rem;
		}
	}
`;
