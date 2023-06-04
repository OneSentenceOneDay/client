import styled from "styled-components";
import palette from "../../../lib/palette";

export const Wrap = styled.div`
	background-color: ${palette.blue1};
	// height: 5rem;
	padding: 1.3rem 0rem;
	margin-left: -0.55rem;
	margin-right: -0.4rem;
	margin-top: -0.5rem;
	border-bottom: 1px solid ${palette.gray1};
	display: flex;
	justify-content: space-between;
	img {
		width: 5rem;
		vertical-align: middle;
		margin-left: 3rem;
		cursor: pointer;
	}
	@media only screen and (max-width: 768px) {
		margin-right: -0.55rem;
		img {
			margin-left: 1.5rem;
		}
	}
`;

export const Right = styled.div``;

export const EventBut = styled.div`
	display: inline-block;
	padding: 0.55rem 1.25rem;
	background-color: ${palette.blue8};
	cursor: pointer;
	font-family: Pretendard-Bolder;
	font-size: 1.125rem;
	color: #ffffff;
	border-radius: 62.438rem;
	@media only screen and (max-width: 700px) {
		padding: 0.35rem 0.7rem;
		font-size: 0.938rem;
	}
`;

export const GiftIcon = styled.div`
	display: none;
	@media only screen and (max-width: 700px) {
		display: inline-block;
		margin-right: 0.35rem;
	}
`;

export const LoginBut = styled.div`
	display: inline-block;
	font-size: 1rem;
	margin-right: 3rem;
	margin-left: 2rem;
	color: ${palette.blue2};
	font-family: Pretendard-Bold;
	cursor: pointer;

	@media only screen and (max-width: 700px) {
		margin-right: 1.5rem;
		margin-left: 1rem;
	}
`;

export const ProfileBut = styled.div`
	margin-right: 3rem;
	display: inline-block;
	img {
		width: 2.5rem;
		cursor: pointer;
	}
	@media only screen and (max-width: 700px) {
		margin-right: 1.5rem;
		img {
			width: 2rem;
		}
	}
`;

export const Menu = styled.div`
	position: absolute;
	z-index: 999;
	right: 3rem;
	top: 4.5rem;
	background-color: #ffffff;
	width: 11.25rem;
	padding: 0.75rem 0rem;
	border-radius: 0.625rem;
	box-shadow: 0rem 0.125rem 1.5rem rgba(0, 0, 0, 0.15);
	@media only screen and (max-width: 768px) {
		width: 10rem;
	}
`;

export const Menudiv = styled.div<{ mark: string }>`
	width: 8.75rem;
	// background-color: red;
	padding: 0.9rem 0rem;
	margin: 0 auto;
	color: ${(props) =>
		props.mark === "name"
			? `${palette.gray2}`
			: props.mark === "menu"
			? `${palette.blue2}`
			: `${palette.gray1}`};
	font-size: ${(props) => (props.mark === "name" ? "1.5rem" : "1.125rem")};
	font-family: Pretendard-Medium;
	cursor: ${(props) => (props.mark === "name" ? "" : "pointer")};
	@media only screen and (max-width: 768px) {
		font-size: ${(props) => (props.mark === "name" ? "1.1rem" : "0.9rem")};
		padding: 0.8rem;
		width: 7.7rem;
	}
`;
