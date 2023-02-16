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
`;

export const Eng = styled.div`
	font-size: 2.25rem;
	margin-top: 2rem;
	font-family: Pretendard-Bolder;
	color: ${palette.gray2};
`;

export const Sentence = styled.div`
	margin-top: 2rem;
	font-size: 1.125rem;
	font-family: times-new-roman;
	color: ${palette.gray2};
`;

export const SentenceKor = styled.div`
	color: ${palette.gray1};
	font-family: Pretendara-Light;
	font-size: 0.9rem;
	margin-top: 0.7rem;
`;

export const Source = styled.div`
	font-size: 1rem;
	font-family: times-new-roman-italic;
	color: ${palette.gray2};
	margin-top: 0.7rem;
`;

export const SourceKor = styled.div`
	font-size: 0.8rem;
	color: ${palette.gray1};
	margin-top: 0.6rem;
	font-family: Pretendara-Light;
`;

export const Input = styled.div`
	margin-top: 2rem;
	textarea {
		width: 49.75rem;
		height: 10rem;
		padding: 1rem 1.25rem;
		border-radius: 0.625rem 0.625rem 0rem 0rem;
		border: 0.063rem solid ${palette.gray4};
		resize: none;
		font-size: 1.125rem;
		font-family: Pretendard-Regular;
		::placeholder {
			color: ${palette.gray4};
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
		margin-left: 2rem;
		cursor: pointer;
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
`;

export const ListContainer = styled.div`
	width: 52.75rem;
	margin: 0 auto;
	padding-top: 3rem;
`;

export const Sorted = styled.div<{ flag: boolean }>`
	color: ${(props) => (props.flag ? palette.blue2 : palette.blue4)};
	font-family: ${(props) =>
		props.flag ? "Pretendard-Bold" : "Pretendard-Regular"};
	&:hover {
		cursor: pointer;
		color: ${(props) => (props.flag ? palette.blue2 : palette.blue5)};
	}
`;

export const SortMenu = styled.div`
	text-align: right;
	div {
		display: inline-block;
		font-size: 1rem;
		margin-right: 1rem;
	}
`;

export const MailSection = styled.div`
	margin-top: 5rem;
`;

export const MailText = styled.div`
	display: inline-block;
	text-align: left;
	width: 26.125rem;
`;

export const MailInput = styled.div`
	display: inline-block;
	vertical-align: top;
	width: 26.125rem;
`;

export const TopText = styled.div`
	white-space: pre-line;
	font-family: Pretendard-Bold;
	font-size: 1.5rem;
	color: ${palette.gray2};
`;

export const BottomText = styled.div`
	font-family: Pretendard-Regular;
	font-size: 1.25rem;
	margin-top: 1.65rem;
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
				? "0.625rem 0rem 0rem 0rem "
				: "0rem 0rem 0rem 0.625rem "};
		border: 0.063rem solid ${palette.gray4};
		margin-top: ${(props) => (props.position === "up" ? "" : "-0.063rem")}}
		font-size: 1.125rem;
		font-family: Pretendard-Regular;
		}
		input::placeholder {
			color: ${palette.gray4};
	}
`;

export const InputBut = styled.div`
	background-color: ${palette.blue2};
	display: inline-block;
	vertical-align: top;
	width: 4.5rem;
	height: 6.82rem;
	line-height: 6.82rem;
	font-family: Pretendard-Bold;
	color: #ffffff;
	border-radius: 0rem 0.625rem 0.625rem 0rem;
	font-size: 1.125rem;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;
