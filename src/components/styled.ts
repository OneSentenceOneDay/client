import styled from "styled-components";
import palette from "./../lib/palette";

// ************** Wrap.tsx **************
export const Wrap = styled.div`
	background-color: ${palette.blue1};
	min-height: 100vh;
	margin-left: -0.55rem;
	margin-right: -0.4rem;
	margin-bottom: -0.625rem;
	text-align: center;
	@media only screen and (max-width: 768px) {
		margin-right: -0.55rem;
	}
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

export const Body = styled.div<{ flag: boolean }>`
	white-space: pre-line;
	font-size: ${(props) => (props.flag ? "1.1rem" : "1rem")};
	font-family: Pretendard-Light;
	line-height: 1.7rem;
	margin-top: ${(props) => (props.flag ? "0rem" : "2rem")};
	margin-bottom: 1rem;
	@media only screen and (max-width: 768px) {
		margin-top: 1rem;
		font-size: 0.9rem;
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
	width: 25.375rem;
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
	z-index: 999;
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

// ************** 광고 **************
export const DesktopAds = styled.div<{ width: string }>`
	@media only screen and (max-width: ${(props) => props.width}) {
		display: none;
	}
	// @media only screen and (max-width: 768px) {
	// 	display: none; 1338px
	// }
`;

export const MobileAds = styled.div`
	display: none;
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;
