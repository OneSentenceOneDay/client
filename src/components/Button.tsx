import styled from "styled-components";
import palette from "lib/palette";

// export const Button = styled.div<{ flag: boolean; index: number }>`
// 	min-width: ${(props) => (props.flag ? "12.22rem" : "25.375rem")};
// 	max-width: ${(props) => (props.flag ? "12.22rem" : "25.375rem")};
// 	min-height: 3.3rem;
// 	max-height: 3.3rem;
// 	line-height: 3.3rem;
// 	font-size: 1rem;
// 	font-family: Pretendard-Bold;
// 	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
// 	margin-top: 1rem;
// 	border: none;
// 	background-color: ${(props) =>
// 		props.index === 1 ? palette.blue2 : palette.gray5};
// 	color: ${(props) => (props.index === 1 ? "#ffffff" : palette.blue4)};

// 	&:hover {
// 		cursor: pointer;
// 		opacity: 0.9;
// 	}
// 	@media only screen and (max-width: 768px) {
// 		min-width: ${(props) => (props.flag ? "8.7rem;" : "18rem")};
// 		max-width: ${(props) => (props.flag ? "8.7rem;" : "18rem")};
// 		height: 3.3rem;
// 		line-height: 3.3rem;
// 	}
// `;

export const Button = styled.button`
	min-height: 3.3rem;
	max-height: 3.3rem;
	font-family: Pretendard-Bold;
	font-size: 1rem;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	margin-top: 1rem;

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

	@media only screen and (max-width: 768px) {
		min-height: 3rem;
		max-height: 3rem;
		font-size: 0.9rem;
	}
`;

export const BigButton = styled(Button)`
	min-width: 25.375rem;
	max-width: 25.375rem;

	@media only screen and (max-width: 768px) {
		min-width: 18rem;
		max-width: 18rem;
	}
`;

export const SmallButton = styled(Button)`
	min-width: 12.3rem;
	max-width: 12.3rem;

	@media only screen and (max-width: 768px) {
		min-width: 8.7rem;
		max-width: 8.7rem;
	}
`;

export const BlueBigButton = styled(BigButton)`
	background-color: ${palette.blue2};
	color: #ffffff;
	border: none;
`;

export const BlueSmallButton = styled(SmallButton)`
	background-color: ${palette.blue2};
	color: #ffffff;
	border: none;
`;

export const GraySmallButton = styled(SmallButton)`
	background-color: ${palette.gray5};
	color: ${palette.blue4};
	border: none;
`;

export const GoogleButton = styled(BigButton)`
	background-color: ${palette.blue7};
	color: ${palette.gray6};
	border: none;
	img {
		width: 1rem;
		margin-right: 0.5rem;
		vertical-align: top;
	}
`;

export const GoogleButton2 = styled(BigButton)`
	background-color: ${palette.blue1};
	color: ${palette.gray6};
	border: 0.063rem solid ${palette.blue2};
	img {
		margin-right: 0.5rem;
		vertical-align: top;
	}
`;
