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
	width: 9rem;
	margin: 0 auto;
	border-bottom: 1px solid ${palette.blue2};
	font-family: Pretendard-Regular;
`;

export const Text = styled.div`
	font-size: 1.125rem;
	margin-top: 1rem;
	font-family: Pretendard-Regular;
	color: ${palette.gray3};
`;

export const Eng = styled.div`
	font-size: 2.25rem;
	margin-top: 2rem;
	font-family: Pretendard-Bold;
	color: ${palette.gray3};
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
		border: 1px solid ${palette.gray4};
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
	border: 1px solid ${palette.gray4};
	margin-top: -0.4rem;
`;

export const Icons = styled.div`
	background-color: #ffffff;
	border-radius: 0rem 0rem 0rem 0.625rem;
	width: 36rem;
	height: 3.25rem;
	padding-top: 0.5rem;
	line-height: 3.75rem;
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
	font-family: Pretendara-Bold;
	border-radius: 0rem 0rem 0.625rem 0rem;
	float: left;
	&:hover {
		cursor: pointer;
	}
`;

export const ListContainer = styled.div`
	background-color: red;
	margin-top: 3rem;
`;

export const Sort = styled.div``;
export const SortMenu = styled.div``;

export const LikeSort = styled.div``;
export const LatestSort = styled.div``;
export const MineSort = styled.div``;
