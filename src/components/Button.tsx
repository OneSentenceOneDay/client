import styled from "styled-components";
import palette from "lib/palette";

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
