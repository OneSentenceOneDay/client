import styled from "styled-components";
import palette from "lib/palette";

export const Button = styled.div<{ flag: boolean; index: number }>`
	min-width: ${(props) => (props.flag ? "11.2rem" : "25.375rem")};
	max-width: ${(props) => (props.flag ? "11.2rem" : "25.375rem")};
	min-height: 3.3rem;
	max-height: 3.3rem;
	line-height: 3.3rem;
	font-size: 1rem;
	font-family: Pretendard-Bold;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	margin-top: 1rem;
	border: none;
	background-color: ${(props) =>
		props.index === 1 ? palette.blue2 : palette.gray5};
	color: ${(props) => (props.index === 1 ? "#ffffff" : palette.blue4)};

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
