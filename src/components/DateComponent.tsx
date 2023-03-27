import styled from "styled-components";
import palette from "lib/palette";

export function CalcToday() {
	const week = ["일", "월", "화", "수", "목", "금", "토"];
	let today = new Date();
	let date =
		today.getFullYear() +
		"." +
		(today.getMonth() + 1 > 9
			? today.getMonth() + 1
			: "0" + (today.getMonth() + 1)) +
		"." +
		(today.getDate() > 9 ? today.getDate() : "0" + today.getDate()) +
		" " +
		week[today.getDay()] +
		"요일";
	return date;
}

type dateType = {
	date: string;
	page: string;
};

function DateComponent({ date, page }: dateType) {
	return <Today page={page}>{date}</Today>;
}
export default DateComponent;

export const Today = styled.div<{ page: string }>`
	font-size: 1rem;
	color: ${(props) => (props.page === "main" ? palette.blue2 : palette.gray2)};
	height: 1.5rem;
	line-height: 1.5rem;
	width: 8.5rem;
	margin: ${(props) => (props.page === "main" ? `0 auto` : "")};
	border-bottom: ${(props) =>
		props.page === "main" ? `0.063rem solid ${palette.blue2}` : ""};
	font-family: Pretendard-Regular;
	display: inline-block;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 7.5rem;
	}
`;
