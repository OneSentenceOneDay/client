import styled from "styled-components";
import palette from "../../../lib/palette";

export const Inner = styled.div`
	padding: 3rem;
	@media only screen and (max-width: 768px) {
		padding: 2rem 0rem;
	}
`;

export const EventIcon = styled.div`
	font-family: Pretendard-Light;
	font-size: 1rem;
	color: ${palette.blue2};
	padding: 0.375rem 0.175rem;
	border-radius: 62.438rem;
	border: 0.063rem solid ${palette.blue2};
	background-color: #ffffff;
	width: 4.5rem;
	margin: 0 auto;
	@media only screen and (max-width: 768px) {
		font-size: 0.75rem;
		padding: 0.375rem 0.1rem;
		width: 3.5rem;
	}
`;

export const Text1 = styled.div`
	font-family: Pretendard-Light;
	color: ${palette.blue2};
	font-size: 1.5rem;
	margin-top: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 1.125rem;
		margin-top: 0.5rem;
	}
`;

export const Text2 = styled.div`
	font-family: Pretendard-Bold;
	color: ${palette.blue8};
	font-size: 2rem;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	@media only screen and (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
`;
export const Text3 = styled.div<{ flag: boolean }>`
	white-space: pre-line;
	color: ${(props) => (props.flag ? palette.blue2 : palette.gray2)};
	line-height: 1.5rem;
	font-size: 1.125rem;
	padding-bottom: ${(props) => (props.flag ? "2rem" : "0rem")};
	font-family: ${(props) =>
		props.flag ? "Pretendard-Bold" : "Pretendard-Regular"};
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		padding-bottom: ${(props) => (props.flag ? "1.5rem" : "0rem")};
		width: ${(props) => (props.flag ? "10rem" : "auto")};
		margin: 0 auto;
	}
`;

export const WhiteBox = styled.div`
	background-color: #ffffff;
	padding-top: 2rem;
	padding-bottom: 1rem;
	width: 49.75rem;
	margin: 0 auto;
	border-radius: 0.625rem 0.625rem 0rem 0rem;
	@media only screen and (max-width: 768px) {
		width: 21.875rem;
		img {
			width: 7rem;
			border-radius: 0.5rem 0.5rem 0rem 0rem;
		}
	}
`;

export const Text4 = styled.div`
	color: ${palette.blue8};
	font-size: 1rem;
	font-family: Pretendard-Light;
	margin-top: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

export const Text5 = styled.div`
	color: ${palette.blue8};
	font-size: 1.125rem;
	font-family: Pretendard-Medium;
	margin: 0.5rem 0rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

export const PinkBox = styled.div`
	background-color: #ffe8eb;
	padding: 2rem 0rem;
	width: 49.75rem;
	margin: 0 auto;
	border-radius: 0rem 0rem 0.625rem 0.625rem;
	@media only screen and (max-width: 768px) {
		width: 21.875rem;
		padding: 1rem 0rem;
		border-radius: 0rem 0rem 0.5rem 0.5rem;
	}
`;

export const Title = styled.div`
	color: ${palette.blue2};
	font-size: 1.125rem;
	font-family: Pretendard-Medium;
	background-color: #ffffff;
	width: 4.688rem;
	margin: 0 auto;
	padding: 0.45rem 0.9rem;
	border-radius: 0.625rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 3.5rem;
		padding: 0.45rem 0.6rem;
	}
`;

export const Item = styled.div`
	margin-top: 1.5rem;
	img {
		width: 3.3rem;
	}
	@media only screen and (max-width: 768px) {
		img {
			width: 2.3rem;
		}
	}
`;

export const Texts = styled.div`
	display: inline-block;
	text-align: left;
	margin-left: 1rem;
	width: 18.5rem;
	@media only screen and (max-width: 768px) {
		width: 17.5rem;
		margin-left: 0.7rem;
	}
`;

export const Text6 = styled.div<{ flag: boolean }>`
	color: ${palette.gray2};
	font-family: ${(props) =>
		props.flag ? "Pretendard-Bold" : "Pretendard-Regular"};
	font-size: 1.125rem;
	line-height: 1.5rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

export const BlueBox = styled.div`
	background-color: ${palette.blue2};
	padding: 2rem;
	width: 45.75rem;
	margin: 2rem auto;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	@media only screen and (max-width: 768px) {
		width: 19.875rem;
		border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
		padding: 2rem 1rem;
	}
`;
export const Text7 = styled.div<{ flag: boolean }>`
	white-space: pre-line;
	font-family: Pretendard-Regular;
	line-height: 1.8rem;
	color: #ffffff;
	font-size: ${(props) => (props.flag ? "2.5rem" : "1.125rem")};
	margin-bottom: 1rem;
	@media only screen and (max-width: 768px) {
		border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
		font-size: ${(props) => (props.flag ? "2.5rem" : "0.875rem")};
		line-height: 1.5rem;
	}
`;

export const FeedbackBut = styled.div`
	margin-top: 1rem;
	width: 22.5rem;
	background-color: #ffffff;
	margin: 0 auto;
	padding: 1rem 0.625rem;
	color: ${palette.blue2};
	font-family: Pretendard-Regular;
	font-size: 1.125rem;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	cursor: pointer;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 18rem;
	}
`;

export const CloseModal = styled.div`
	width: 27.375rem;
	text-align: right;
	margin-top: 3rem;
	margin-bottom: -1rem;
	color: #4f4f4f;
	font-family: Pretendard-Regular;
	font-size: 1rem;
	div {
		display: inline-block;
		margin-left: 1rem;
		cursor: pointer;
		&: hover {
			opacity: 0.9;
		}
	}
	input {
		margin-right: 0.3rem;
	}
	label {
		&: hover {
			opacity: 0.9;
			cursor: pointer;
		}
	}
	@media only screen and (max-width: 768px) {
		width: 17.75rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		div {
			margin-left: 0rem;
		}
	}
`;
