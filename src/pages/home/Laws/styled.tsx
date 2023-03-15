import styled from "styled-components";
import palette from "lib/palette";

export const Title = styled.div`
	color: ${palette.blue2};
	text-align: left;
	padding-top: 3rem;
	font-family: Pretendard-Bold;
	font-size: 1.125rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.95rem;
	}
`;

export const InnerWrap = styled.div`
	width: 52.75rem;
	margin: 0 auto;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
	}
`;

export const Conts = styled.div`
	white-space: pre-line;
	text-align: left;
	font-family: Pretendard-Regular;
	line-height: 1.75rem;
	font-size: 0.95rem;
	margin-top: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;
