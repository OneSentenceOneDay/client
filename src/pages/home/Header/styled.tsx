import styled from "styled-components";
import palette from "../../../lib/palette";

export const Wrap = styled.div`
	background-color: ${palette.blue1};
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
		cursor: pointer;
	}
	display: flex;
	justify-content: space-between;
`;

export const LoginBut = styled.div`
	font-size: 1rem;
	margin-right: 3rem;
	color: ${palette.blue2};
	font-family: Pretendard-Bold;
	cursor: pointer;
`;

export const ProfileBut = styled.div`
	margin-right: 3rem;
	display: inline-block;
	img {
		width: 2.5rem;
		cursor: pointer;
	}
`;

export const Menu = styled.div`
	position: fixed;
	z-index: 999;
	right: 2rem;
	background-color: #ffffff;
	width: 11.25rem;
	height: 17rem;
	padding-top: 0.75rem;
	border-radius: 0.625rem;
	box-shadow: 0rem 0.125rem 1.5rem rgba(0, 0, 0, 0.15);
`;

export const Menudiv = styled.div<{ mark: string }>`
	margin-bottom: 1rem;
	width: 8.75rem;
	height: 3.25rem;
	line-height: 3.25rem;
	margin: 0 auto;
	color: ${(props) =>
		props.mark === "name"
			? `${palette.gray2}`
			: props.mark === "menu"
			? `${palette.blue2}`
			: `${palette.gray1}`}}
	font-size: ${(props) => (props.mark === "name" ? "1.5rem" : "1.125rem")}}
	font-family: Pretendarad-Medium;
	cursor: ${(props) => (props.mark === "name" ? "" : "pointer")}} 
`;
