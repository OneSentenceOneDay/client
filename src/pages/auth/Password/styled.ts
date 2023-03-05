import styled from "styled-components";
import palette from "../../../lib/palette";

export const Text = styled.div`
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
	padding-top: 8rem;
	margin-bottom: 2rem;
	font-size: 1.5rem;
`;

export const Button = styled.button`
	width: 25.375rem;
	height: 3.3rem;
	font-family: Pretendard-Bold;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	margin-top: 2rem;
	margin-bottom: 10rem;
	border: none;
	background-color: ${palette.blue2};
	color: #ffffff;
	font-size: 1rem;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;
