import styled from "styled-components";
import palette from "../../../lib/palette";

export const Wrap = styled.div`
	background-color: ${palette.blue1};
	// width: 100vw;
	height: 7vh;
	line-height: 7vh;
	margin-left: -0.55vw;
	margin-right: -0.4vw;
	margin-top: -1vh;
	border-bottom: 1px solid ${palette.gray1};
	img {
		width: 3.5vw;
		vertical-align: middle;
		margin-left: 3vw;
	}
`;

export const LoginBut = styled.div`
	font-size: 0.9vw;
	margin-right: 3vw;
	color: ${palette.blue2};
	float: right;
	font-family: Pretendard-Bold;
`;
