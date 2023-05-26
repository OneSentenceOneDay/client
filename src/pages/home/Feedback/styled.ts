import styled from "styled-components";
import palette from "../../../lib/palette";

export const Up = styled.div``;

export const Text = styled.div`
	white-space: pre-line;
	text-align: left;
	color: ${palette.blue2};
	font-family: Pretendard-Regular;
	font-size: 1.05rem;
	display: inline-block;
	width: 21rem;
	// background-color: red;
	@media only screen and (max-width: 768px) {
		font-size: 0.813rem;
		width: 14rem;
	}
`;

export const Emoji = styled.div`
	display: inline-block;
	font-size: 2.5rem;
	margin-right: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 2rem;
	}
`;

export const TextArea = styled.textarea`
	width: 22.375rem;
	height: 13rem;
	padding: 1rem 1.25rem;
	resize: none;
	font-size: 1rem;
	font-family: Pretendard-Regular;
	margin-top: 1rem;
	background-color: ${palette.gray3};
	border-radius: 0.625rem;
	border-color: ${palette.gray3};
	&: focus {
		outline: none;
	}
	@media only screen and (max-width: 768px) {
		width: 15rem;
	}
`;
