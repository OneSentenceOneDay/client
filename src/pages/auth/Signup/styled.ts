import styled from "styled-components";
import palette from "../../../lib/palette";

export const Privacy = styled.div`
	text-align: left;
	width: 25.375rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-size: 0.9rem;
	color: ${palette.gray2};
	font-family: Pretendard-Regular;
	input {
		margin-right: 0.5rem;
	}
	@media only screen and (max-width: 768px) {
		width: 18rem;
	}
`;

export const WarningText = styled.div<{ noWarning: boolean | null }>`
	min-width: 24.875rem;
	margin: 0 auto;
	text-align: left;
	padding-top: 0.5rem;
	font-family: Pretendard-Light;
	color: ${palette.red1};
	font-size: 0.75rem;
	display: ${(props) => (props.noWarning === false ? "" : "none")};
	@media only screen and (max-width: 768px) {
		min-width: 18rem;
		margin: 0;
	}
`;
