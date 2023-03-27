import styled from "styled-components";
import palette from "lib/palette";

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
