import styled from "styled-components";
import palette from "../lib/palette";

export const Input = styled.div<{ noWarning: boolean; page: string }>`
	input {
		font-size: 0.8rem;
		padding: 0.9rem 1.15rem;
		width: 22.875rem;
		height: 1.3rem;
		font-family: Pretendard-Regular;
		border: 0.063rem solid
			${(props) => (props.noWarning === false ? palette.red1 : palette.gray4)};
		border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
		margin-top: 1rem;
	}
	input::placeholder {
		color: ${palette.gray4};
	}
	@media only screen and (max-width: 768px) {
		input {
			width: 15.5rem;
		}
	}
`;
