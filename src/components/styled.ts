import styled from "styled-components";
import palette from "./../lib/palette";

// ************** Wrap.tsx **************
export const Wrap = styled.div`
	background-color: ${palette.blue1};
	margin-left: -0.55rem;
	margin-right: -0.4rem;
	margin-bottom: -0.625rem;
	text-align: center;
`;

// ************** Comment.tsx **************
export const Comment = styled.div`
	background-color: #ffffff;
	margin-top: 1rem;
	padding: 1.5rem 1.5rem 1rem 1.5rem;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	border: 0.063rem solid ${palette.gray4};
	width: 49.75rem;
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

export const Num = styled.div`
	display: inline-block;
	font-size: 0.875rem;
	font-family: Pretendard-Regular;
	color: ${palette.blue2};
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

// ************** Date.tsx **************
export const Today = styled.div<{ page: string }>`
	font-size: 1rem;
	color: ${(props) => (props.page === "main" ? palette.blue2 : palette.gray2)};
	height: 1.5rem;
	line-height: 1.5rem;
	width: 8.5rem;
	margin: ${(props) => (props.page === "main" ? `0 auto` : "")};
	border-bottom: ${(props) =>
		props.page === "main" ? `0.063rem solid ${palette.blue2}` : ""};
	font-family: Pretendard-Regular;
	display: inline-block;
`;

// ************** Footer.tsx **************
export const Footer = styled.div`
	width: 52.75rem;
	padding-top: 10rem;
	text-align: right;
	margin: 0 auto;
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
