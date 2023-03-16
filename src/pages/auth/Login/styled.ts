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
	padding: 2.5rem 0;
	width: ${(props) => (props.page === "modal" ? "32rem" : "35rem")};
	height: ${(props) => (props.page === "signup" ? "80%" : "")};
	max-height: 50rem;
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
		min-width: 25.375rem;
		max-width: 25.375rem;
		min-height: 3.3rem;
		max-height: 3.3rem;
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
	overflow-y: scroll;
	@media only screen and (max-width: 768px) {
		max-width: 20.5rem;
		min-width: 20.5rem;
		img {
			width: 5rem;
		}
		button {
			min-width: 18rem;
			max-width: 18rem;
			min-height: 3rem;
			max-height: 3rem;
			font-size: 0.9rem;
		}
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
	@media only screen and (max-width: 768px) {
		width: 18rem;
		height: 3rem;
		font-size: 0.9rem;
		line-height: 3rem;
		img {
			width: 0.7rem;
		}
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
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const SignupBut = styled.div`
	color: ${palette.blue2};
	cursor: pointer;
	display: inline-block;
	// margin-left: 1.8rem;
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
	}
`;

export const FindBut = styled.div`
	color: ${palette.gray4};
	display: inline-block;
	cursor: pointer;
	margin-left: 1.8rem;
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
	}
`;
export const BottomBut = styled.div`
	margin-top: 1.7rem;
	font-family: Pretendard-Regular;
	font-size: 1rem;
	width: 15rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

export const Input = styled.div<{ noWarning: boolean; page: string }>`
	input {
		padding: 0.9rem 1.15rem;
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
	@media only screen and (max-width: 768px) {
		input {
			width: 15.5rem;
		}
	}
`;
