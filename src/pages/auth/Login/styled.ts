import styled from "styled-components";
import palette from "../../../lib/palette";

export const ModalContainer = styled.div`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
`;

export const DialogBox = styled.dialog<{ page: string }>`
	padding: ${(props) =>
		props.page === "login"
			? "2.5rem 5.313rem 2.5rem 5.313rem"
			: "2.5rem 5.313rem 2.5rem 5.313rem"};
	width: ${(props) => (props.page === "modal" ? "32rem" : "35rem")};
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	border-radius: 0.625rem;
	box-shadow: 0rem 0.125rem 1.5rem rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	background-color: #ffffff;
	z-index: 10000;
	top: ${(props) =>
		props.page === "signup"
			? "-2.5rem"
			: props.page === "login"
			? "0rem"
			: "3rem"};
	button {
		width: 25.375rem;
		height: 3.3rem;
		font-family: Pretendard-Bold;
		border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
		margin-top: 1rem;
		border: none;
		background-color: ${palette.blue2};
		color: #ffffff;
		font-size: 1rem;
		&:hover {
			cursor: pointer;
			opacity: 0.9;
		}
	}
	img {
		width: 7rem;
	}
`;

export const GoogleButton = styled.div`
	background-color: ${palette.blue7};
	color: ${[palette.gray6]};
	width: 25.375rem;
	height: 3.3rem;
	line-height: 3.3rem;
	font-family: Pretendard-Bold;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	margin-top: 1rem;
	border: none;
	img {
		width: 1.125rem;
		margin-right: 0.5rem;
	}
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;

export const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.2);
`;

export const Text = styled.div`
	font-size: 1.2rem;
	font-family: Pretendard-Light;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
`;

export const SignupBut = styled.div`
	margin-top: 1.7rem;
	font-family: Pretendard-Regular;
	font-size: 1rem;
	height: 1.5rem;
	width: 3.5rem;
	border-bottom: 0.063rem solid ${palette.blue2};
	color: ${palette.blue2};
	cursor: pointer;
`;

export const Input = styled.div<{ noWarning: boolean }>`
	input {
		padding: 1rem 1.25rem;
		width: 22.875rem;
		height: 1.3rem;
		font-family: Pretendard-Regular;
		border: 0.063rem solid
			${(props) => (props.noWarning === false ? palette.red1 : palette.gray4)};
		border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
		margin-top: 1rem;
	}
	input::placeholder {
		color: ${palette.gray4};
	}
`;
