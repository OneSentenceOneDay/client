import styled from "styled-components";
import palette from "../../../lib/palette";

export const Wrap = styled.div`
	background-color: ${palette.blue1};
	// width: 100vw;
	// height: 100vh;
	margin-left: -0.55rem;
	margin-right: -0.4rem;
	text-align: center;
`;

export const TodayStc = styled.div`
	padding-top: 3rem;
`;

export const Today = styled.div`
	font-size: 1rem;
	color: ${palette.blue2};
	height: 1.5rem;
	line-height: 1.5rem;
	width: 8.5rem;
	margin: 0 auto;
	border-bottom: 0.063rem solid ${palette.blue2};
	font-family: Pretendard-Regular;
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
	}
`;

export const ListContainer = styled.div`
	width: 52.25rem;
	margin: 0 auto;
	padding-top: 3rem;
`;

export const Sorted = styled.div<{ flag: boolean }>`
	color: ${(props) => (props.flag ? palette.blue2 : palette.blue4)};
	font-family: Pretendard-bold;
`;

export const SortMenu = styled.div`
	text-align: right;
	div {
		display: inline-block;
		cursor: pointer;
		font-family: Pretendard-Regular;
		font-size: 1rem;
		padding-right: 1rem;
	}
`;

export const LikeSort = styled.div``;
export const LatestSort = styled.div``;
export const MineSort = styled.div``;

export const Comment = styled.div`
	background-color: #ffffff;
	margin-top: 1rem;
	padding: 1.5rem 1.5rem 1rem 1.5rem;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	border: 0.063rem solid ${palette.gray4};
`;

export const Name = styled.div`
	font-size: 1.125rem;
	font-family: Pretendard-Regular;
	text-align: left;
	width: 9rem;
	vertical-align: top;
	display: inline-block;
	color: ${palette.gray2};
`;

export const Right = styled.div`
	width: 39.75rem;
	display: inline-block;
`;

export const Contents = styled.div`
	text-align: left;
	font-size: 1.125rem;
	line-height: 2rem;
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
`;

export const Num = styled.div`
	display: inline-block;
	font-size: 0.875rem;
	font-family: Pretendard-Regular;
	color: ${palette.blue2};
`;

export const BottomDiv = styled.div`
	text-align: right;
	padding-top: 1.7rem;
	img {
		cursor: pointer;
	}
`;

export const HeartDiv = styled.div`
	display: inline-block;
	margin-left: 1.5rem;
`;

export const PageSection = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: right;
`;

export const PageDiv = styled.div<{ flag: boolean }>`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	line-height: 2rem;
	border: 0.063rem solid
		${(props) => (props.flag ? palette.blue2 : palette.gray4)};
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	background-color: ${(props) => (props.flag ? palette.blue2 : palette.gray3)};
	color: ${(props) => (props.flag ? palette.gray3 : palette.blue2)};
	font-family: Pretendard-Regular;
	font-size: 0.9rem;
	cursor: pointer;
	margin-left: 0.4rem;
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
	cursor: pointer;
`;

export const Footer = styled.div`
	margin-top: 7rem;
	text-align: right;
	margin-bottom: -0.625rem;
`;

export const Member = styled.div<{ flag: boolean }>`
	white-space: pre-line;
	display: inline-block;
	color: ${palette.blue2};
	font-family: Pretendara-Light;
	font-size: 0.563rem;
	text-align: right;
	padding-left: 1rem;
	padding-right: ${(props) => (props.flag ? "1rem" : "")}}
	border-right: ${(props) =>
		props.flag ? `0.063rem solid ${palette.blue2}` : ""}}
`;
export const Copyright = styled.div`
	font-family: Pretendara-Light;
	font-size: 0.563rem;
	color: ${palette.blue2};
	margin-top: 1rem;
	padding-bottom: 2rem;
`;
