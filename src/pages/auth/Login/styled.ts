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
			? "3.125rem 5.313rem 0rem 5.313rem"
			: "3.125rem 5.313rem 0rem 5.313rem"};
	width: 40rem;
	height: ${(props) => (props.page === "login" ? "38.125rem" : "51.25rem")};
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	border-radius: 0.625rem;
	box-shadow: 0rem 0.125rem 1.5rem rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	background-color: #ffffff;
	z-index: 10000;
	top: 0rem;
	button {
		width: 29.375rem;
		height: 3.75rem;
		font-family: Pretendard-Bold;
		border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
		margin-top: 1.3rem;
		border: none;
		background-color: ${palette.blue2};
		color: #ffffff;
		font-size: 1.125rem;
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
	font-size: 1.5rem;
	font-family: Pretendard-Regular;
	margin-top: 1rem;
	margin-bottom: 2rem;
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

export const Input = styled.div`
	input {
		padding: 1rem 1.25rem;
		width: 26.875rem;
		height: 1.75rem;
		font-family: Pretendard-Regular;
		border: 0.063rem solid ${palette.gray4};
		border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
		margin-top: 1.3rem;
	}
	input::placeholder {
		color: ${palette.gray4};
	}
`;
