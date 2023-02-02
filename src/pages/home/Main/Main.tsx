import { Wrap, TodayStc, Today, Text, Eng, Sentence, Source } from "./styled";

type stcType = {
	date: string;
	eng: string;
	sentence: string;
	source: string;
};

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

const sample: stcType = {
	date: date,
	eng: "is(be) on his way ~",
	sentence: "Instead of seeing stars, he is on his way to becoming one.",
	source: "- The New York Times sport",
};

function Main() {
	return (
		<>
			<Wrap>
				<TodayStc>
					<Today>{sample.date}</Today>
					<Text>오늘의 구문을 사용하여 영어 글쓰기를 연습해 보세요.</Text>
					<Eng>{sample.eng}</Eng>
					<Sentence>{sample.sentence}</Sentence>
					<Source>{sample.source}</Source>
				</TodayStc>
				{/* <input /> */}
			</Wrap>
		</>
	);
}

export default Main;
