import styled from "styled-components";
import palette from "lib/palette";

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
	top: ${(props) => (props.page === "modal" ? "25%" : "0rem")};
	overflow-y: scroll;

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
