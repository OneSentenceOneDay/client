import styled from "styled-components";
import palette from "../../../lib/palette";

export const Wrap = styled.div`
	background-color: ${palette.blue1};
	// width: 100vw;
	height: 5rem;
	line-height: 5rem;
	margin-left: -0.55rem;
	margin-right: -0.4rem;
	margin-top: -0.5rem;
	border-bottom: 1px solid ${palette.gray1};
	img {
		width: 5rem;
		vertical-align: middle;
		margin-left: 3rem;
	}
`;

export const LoginBut = styled.div`
	font-size: 1rem;
	margin-right: 3rem;
	color: ${palette.blue2};
	float: right;
	font-family: Pretendard-Bold;
`;
