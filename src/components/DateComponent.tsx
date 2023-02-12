import { Today } from "./styled";

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
