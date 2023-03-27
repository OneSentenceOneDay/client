import styled from "styled-components";
import palette from "../../../lib/palette";

export const ModalContainer = styled.div`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
`;

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

export const Text = styled.div`
	font-size: 1.2rem;
	font-family: Pretendard-Light;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const SignupBut = styled.div`
	color: ${palette.blue2};
	cursor: pointer;
	display: inline-block;
	// margin-left: 1.8rem;
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
	}
`;

export const FindBut = styled.div`
	color: ${palette.gray4};
	display: inline-block;
	cursor: pointer;
	margin-left: 1.8rem;
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
	}
`;
export const BottomBut = styled.div`
	margin-top: 1.7rem;
	font-family: Pretendard-Regular;
	font-size: 1rem;
	width: 15rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`;
