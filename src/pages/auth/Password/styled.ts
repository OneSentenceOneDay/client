import styled from "styled-components";
import palette from "../../../lib/palette";

export const Text = styled.div`
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
	padding-top: 8rem;
	margin-bottom: 2rem;
	font-size: 1.5rem;
	@media only screen and (max-width: 768px) {
		padding-top: 4rem;
		font-size: 1.2rem;
	}
`;

export const Button = styled.button<{ google: boolean }>`
	width: 25.375rem;
	height: 3.3rem;
	font-family: Pretendard-Bold;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	margin-top: 1rem;
	border: ${(props) =>
		props.google ? `0.063rem solid ${palette.blue2}` : "none"};
	background-color: ${(props) =>
		props.google ? palette.blue1 : palette.blue2};
	color: ${(props) => (props.google ? palette.gray6 : "#ffffff")};
	font-size: 1rem;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	img {
		margin-right: 0.5rem;
	}
	@media only screen and (max-width: 768px) {
		width: 18rem;
		height: 3rem;
		font-size: 0.9rem;
	}
`;
