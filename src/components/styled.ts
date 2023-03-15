import styled from "styled-components";
import palette from "./../lib/palette";

// ************** Wrap.tsx **************
export const Wrap = styled.div`
	background-color: ${palette.blue1};
	margin-left: -0.55rem;
	margin-right: -0.4rem;
	margin-bottom: -0.625rem;
	text-align: center;
	@media only screen and (max-width: 768px) {
		margin-right: -0.55rem;
	}
`;

// ************** Comment.tsx **************
export const Comment = styled.div`
	background-color: #ffffff;
	margin-top: 1rem;
	padding: 1.5rem 1.5rem 1rem 1.5rem;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	border: 0.063rem solid ${palette.gray4};
	width: 49.75rem;
	@media only screen and (max-width: 768px) {
		width: 17.5rem;
	}
`;

export const Name = styled.div`
	font-size: 1rem;
	font-family: Pretendard-Regular;
	text-align: left;
	width: 8rem;
	padding-right: 1rem;
	vertical-align: top;
	display: inline-block;
	color: ${palette.gray1};
	line-height: none;
	// background-color: red;
	@media only screen and (max-width: 768px) {
		width: 16.5rem;
		font-size: 0.95rem;
		display: flex;
	}
`;

export const Right = styled.div`
	width: 39.75rem;
	display: inline-block;
	// background-color: blue;
	@media only screen and (max-width: 768px) {
		display: block;
		width: 17.5rem;
	}
`;

export const Contents = styled.div`
	text-align: left;
	font-size: 1.125rem;
	// line-height: 2rem;
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.95rem;
		line-height: 1.5rem;
		margin-top: 0.5rem;
	}
`;

export const BottomDiv = styled.div`
	text-align: right;
	padding-top: 1.7rem;
	img {
		cursor: pointer;
		margin-left: 1rem;
	}
	@media only screen and (max-width: 768px) {
		display: block;
		img {
			margin-left: 0.9rem;
			width: 0.95rem;
		}
	}
`;

export const HeartDiv = styled.div`
	display: inline-block;
`;

export const Num = styled.div`
	display: inline-block;
	font-size: 0.875rem;
	font-family: Pretendard-Regular;
	color: ${palette.blue2};
`;

// ************** Pagination.tsx **************
export const PageSection = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: right;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		justify-content: center;
	}
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
	margin-left: 0.4rem;
	&:hover {
		cursor: pointer;
		color: ${(props) => (props.flag ? palette.gray3 : palette.blue2)};
		background-color: ${(props) =>
			props.flag ? palette.blue2 : palette.blue6};
	}
	@media only screen and (max-width: 768px) {
		width: 1.5rem;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.7rem;
	}
`;

// ************** DatecComponent.tsx **************
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
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 7.5rem;
	}
`;

// ************** Footer.tsx **************
export const Footer = styled.div`
	width: 52.75rem;
	padding-top: 10rem;
	text-align: right;
	margin: 0 auto;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		font-size: 0.15rem;
	}
`;

export const Img = styled.div`
	float: left;
	img {
		display: block;
	}
`;

export const Laws = styled.div`
	margin-top: 1rem;
`;

export const Law = styled.div`
	display: inline-block;
	margin-left: 1rem;
	color: ${palette.blue2};
	font-family: Pretendard-Light;
	font-size: 0.563rem;
	cursor: pointer;
`;

export const Member = styled.div<{ flag: boolean }>`
	white-space: pre-line;
	display: inline-block;
	color: ${palette.blue2};
	font-family: Pretendard-Light;
	font-size: 0.563rem;
	text-align: right;
	padding-left: 1rem;
	padding-right: ${(props) => (props.flag ? "1rem" : "")};
	border-right: ${(props) =>
		props.flag ? `0.063rem solid ${palette.blue2}` : ""};
	@media only screen and (max-width: 768px) {
		display: block;
		padding-right: 0rem;
		border-right: none;
		margin-top: 0.5rem;
	}
`;
export const Copyright = styled.div`
	font-family: Pretendard-Light;
	font-size: 0.563rem;
	color: ${palette.blue2};
	margin-top: 0.5rem;
	padding-bottom: 2rem;
`;

// ************** Modal.tsx **************
export const ModalContainer = styled.div`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
`;

export const Title = styled.div`
	color: ${palette.blue2};
	font-size: 1.25rem;
	font-family: Pretendard-Medium;
`;

export const Body = styled.div`
	white-space: pre-line;
	font-size: 1rem;
	font-family: Pretendard-Light;
	line-height: 1.7rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
	@media only screen and (max-width: 768px) {
		margin-top: 1rem;
		font-size: 0.8rem;
		width: 18rem;
	}
`;

export const Button = styled.div<{ flag: boolean; index: number }>`
	width: ${(props) => (props.flag ? "11.2rem" : "23rem")};
	height: 3.3rem;
	line-height: 3.3rem;
	font-family: Pretendard-Bold;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	margin-top: 1rem;
	border: none;
	background-color: ${(props) =>
		props.index === 1 ? palette.blue2 : palette.gray5};

	color: ${(props) => (props.index === 1 ? "#ffffff" : palette.blue4)};
	font-size: 1rem;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	@media only screen and (max-width: 768px) {
		width: ${(props) => (props.flag ? "8.7rem;" : "18rem")};
		height: 3.3rem;
		line-height: 3.3rem;
	}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 23rem;
	@media only screen and (max-width: 768px) {
		width: 18rem;
	}
`;

// ************** Translation, AI Modal **************
export const Bluebox = styled.dialog`
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	background-color: #ffffff;
	z-index: 10000;
	border: 0.063rem solid ${palette.blue2};
	border-radius: 0.625rem;
	padding: 1.875rem;
	box-shadow: 0rem 1.125rem 2.25rem rgba(0, 0, 0, 0.15);
	font-family: Pretendard-Regular;
	align-items: flex-start;
	color: ${palette.gray2};
	max-width: 42.125rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
		padding: 1.3rem;
	}
`;

// ************** Loading **************
export const LoadingItem = styled.div`
	padding: 35vh 0;
	font-family: Pretendard-Regular;
`;
