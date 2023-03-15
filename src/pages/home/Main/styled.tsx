import styled from "styled-components";
import palette from "../../../lib/palette";

export const TodayStc = styled.div`
	padding-top: 3rem;
`;

export const Text = styled.div`
	font-size: 1.125rem;
	margin-top: 1rem;
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
	} ;
`;

export const Eng = styled.div`
	font-size: 2.25rem;
	margin-top: 2rem;
	font-family: Pretendard-Bolder;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 1.75rem;
	} ;
`;

export const Sentence = styled.div`
	margin-top: 2rem;
	font-size: 1.125rem;
	font-family: times-new-roman;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 22rem;
		justify-content: center;
		margin: 0 auto;
		padding-top: 1rem;
	} ;
`;

export const SentenceKor = styled.div`
	color: ${palette.gray1};
	font-family: Pretendard-Light;
	font-size: 0.9rem;
	margin-top: 0.7rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 22rem;
		justify-content: center;
		margin: 0 auto;
		padding-top: 1rem;
	} ;
`;

export const Writing = styled.div<{ noWarning: boolean | null }>`
	margin-top: 2rem;
	textarea {
		width: 49.75rem;
		height: 10rem;
		padding: 1rem 1.25rem;
		border-radius: 0.625rem 0.625rem 0rem 0rem;
		border: 0.063rem solid
			${(props) => (props.noWarning === false ? palette.red1 : palette.gray4)};
		resize: none;
		font-size: 1.125rem;
		font-family: Pretendard-Regular;
		::placeholder {
			color: ${palette.gray4};
		}
		@media only screen and (max-width: 768px) {
			width: 18rem;
			height: 7rem;
			font-size: 0.9rem;
		}
	}
`;

export const Menu = styled.div`
	margin: 0 auto;
	width: 52.25rem;
	height: 3.75rem;
	border-radius: 0rem 0rem 0.625rem 0.625rem;
	border: 0.063rem solid ${palette.gray4};
	margin-top: -0.4rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		height: 3.5rem;
	}
`;

export const Icons = styled.div`
	background-color: #ffffff;
	border-radius: 0rem 0rem 0rem 0.625rem;
	width: 36rem;
	height: 3.25rem;
	padding-top: 0.5rem;
	line-height: 3.25rem;
	text-align: left;
	float: left;
	img {
		margin-left: 1.4rem;
		cursor: pointer;
	}
	@media only screen and (max-width: 768px) {
		width: 12.5rem;
		height: 3rem;
		img {
			margin-left: 1.1rem;
			width: 1rem;
		}
	}
`;

export const AIIcon = styled.div`
	background-color: ${palette.blue8};
	color: ${palette.blue3};
	font-family: Pretendard-Bold;
	float: left;
	width: 5rem;
	height: 2.1rem;
	line-height: 2.1rem;
	margin-top: 0.3rem;
	text-align: center;
	border-radius: 0.5rem;
	margin-left: 1.5rem;
	cursor: pointer;
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
		font-size: 0.8rem;
		width: 4rem;
		height: 2rem;
	}
`;

export const Button = styled.div`
	width: 16.25rem;
	height: 3.75rem;
	line-height: 3.75rem;
	color: #ffffff;
	font-size: 1.125rem;
	background-color: ${palette.blue3};
	font-family: Pretendard-Bold;
	border-radius: 0rem 0rem 0.625rem 0rem;
	float: left;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	@media only screen and (max-width: 768px) {
		width: 8rem;
		height: 3.5rem;
		font-size: 1rem;
	}
`;

export const ListContainer = styled.div`
	width: 52.75rem;
	margin: 0 auto;
	padding-top: 3rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
	}
`;

export const WarningText = styled.div<{
	noWarning: boolean | null;
	page: string;
}>`
	width: ${(props) => (props.page === "main" ? "52.75rem" : "25rem")};
	margin: ${(props) => (props.page === "login" ? "" : "0 auto")};
	text-align: left;
	padding-top: 0.5rem;
	font-family: Pretendard-Light;
	color: ${palette.red1};
	font-size: 0.75rem;
	visibility: ${(props) => (props.noWarning === false ? "visible" : "hidden")};
	@media only screen and (max-width: 768px) {
		width: ${(props) => (props.page === "login" ? "17.5rem" : "20.5rem")};
	}
`;

export const NoSentences = styled.div`
	height: 13rem;
`;

export const NoSentencesText = styled.div`
	font-family: Pretendard-Light;
	color: ${palette.gray1};
	margin-top: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export const Cnt = styled.div`
	margin-left: 1rem;
	color: ${palette.blue2};
	font-family: Pretendard-Medium;
	@media only screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const Sorted = styled.div<{ flag: boolean }>`
	color: ${(props) => (props.flag ? palette.blue2 : palette.blue4)};
	font-family: ${(props) =>
		props.flag ? "Pretendard-Bold" : "Pretendard-Regular"};
	&:hover {
		cursor: pointer;
		color: ${(props) => (props.flag ? palette.blue2 : palette.blue5)};
	}
	@media only screen and (max-width: 768px) {
		font-size: 0.15rem;
		margin-top: 1rem;
	}
`;

export const SortMenu = styled.div`
	text-align: right;
	div {
		display: inline-block;
		font-size: 1rem;
		margin-right: 1rem;
		@media only screen and (max-width: 768px) {
			font-size: 0.7rem;
			margin-right: 0.5rem;
		}
	}
`;

export const MailSection = styled.div<{ subscription: boolean }>`
	margin-top: 8rem;
	display: ${(props) => (props.subscription ? "none" : "")};
`;

export const MailText = styled.div<{ login: boolean }>`
	display: inline-block;
	text-align: left;
	width: 26.125rem;
	float: ${(props) => (props.login ? "left" : "")};
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
	}
`;

export const MailInput = styled.div`
	display: inline-block;
	vertical-align: top;
	width: 26.125rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		margin-top: 1rem;
		text-align: left;
	}
`;

export const TopText = styled.div`
	white-space: pre-line;
	font-family: Pretendard-Bold;
	font-size: 1.5rem;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const BottomText = styled.div`
	font-family: Pretendard-Regular;
	font-size: 1.25rem;
	margin-top: 1.65rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.95rem;
		margin-top: 0.7rem;
	}
`;

export const InputSec = styled.div`
	display: inline-block;
`;

export const InputDiv = styled.div<{ position: string }>`
	input {
		&: focus {
			outline: none;
		}

		width: 18rem;
		height: 1.3rem;
		padding: 1rem 1.25rem;
		border-radius: ${(props) =>
			props.position === "up"
				? "0.625rem 0rem 0rem 0rem"
				: "0rem 0rem 0rem 0.625rem"};
		border: 0.063rem solid ${palette.gray4};
		margin-top: ${(props) => (props.position === "up" ? "" : "-0.1rem")};
		font-family: Pretendard-Regular;
	}
	input::placeholder {
		color: ${palette.gray4};
	}

	@media only screen and (max-width: 768px) {
		input {
			padding: 0.9rem 1.25rem;
			width: 12rem;
		}
	}
`;

export const InputBut = styled.div<{ login: boolean }>`
	background-color: ${palette.blue2};
	display: inline-block;
	vertical-align: top;
	width: ${(props) => (props.login ? "14.063rem" : "5.063rem")};
	padding: 2.8rem 0;
	font-family: Pretendard-Bold;
	color: #ffffff;
	font-size: 1rem;
	border-radius: ${(props) =>
		props.login
			? "0.625rem 0.625rem 0.625rem 0.625rem"
			: "0rem 0.625rem 0.625rem 0rem"};
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	float: ${(props) => (props.login ? "right" : "")};
	@media only screen and (max-width: 768px) {
		text-align: center;
		width: ${(props) => (props.login ? "20.5rem" : "5rem")};
		padding: ${(props) => (props.login ? "1rem 0" : "2.6rem 0")};
		margin-top: ${(props) => (props.login ? "1rem" : "")};
	}
`;
