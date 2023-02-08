import {
	Wrap,
	TodayStc,
	Today,
	Text,
	Eng,
	Sentence,
	Source,
	SentenceKor,
	SourceKor,
	Input,
	Menu,
	Icons,
	Button,
	ListContainer,
	// Sort,
	SortMenu,
	LikeSort,
	LatestSort,
	MineSort,
} from "./styled";

import Copy from "../../../assets/icons/copy-icon.svg";
import Listen from "../../../assets/icons/listen-icon.svg";
import Trans from "../../../assets/icons/trans-icon.svg";
import { useState } from "react";

type stcType = {
	date: string;
	eng: string;
	sentence: string;
	sentence_kor: string;
	source: string;
	source_kor: string;
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
	eng: "is on his way ~",
	sentence: "Instead of seeing stars, he is on his way to becoming one.",
	sentence_kor: "별을 보는 대신, 그는 별이 되는 길을 가고 있다.",
	source: "- The New York Times sport",
	source_kor: "출처: 뉴욕타임스 스포츠",
};

const placeholder = sample.eng + " 를 사용하여 영작하기";

type SortProps = {
	name: string;
	mark: boolean;
};

function Main() {
	const sorts = ["좋아요순", "최신순", "내가 쓴 문장"];
	const [nowSort, setNowSort] = useState("좋아요순");

	const Sort = ({ name, mark }: SortProps) => {
		if (mark) {
			return <div>{name}</div>;
		} else {
			return <div>{name} ++ </div>;
		}
	};

	return (
		<>
			<Wrap>
				<TodayStc>
					<Today>{sample.date}</Today>
					<Text>오늘의 구문을 사용하여 영어 글쓰기를 연습해 보세요.</Text>
					<Eng>{sample.eng}</Eng>
					<Sentence>{sample.sentence}</Sentence>
					<SentenceKor>{sample.sentence_kor}</SentenceKor>
					<Source>{sample.source}</Source>
					<SourceKor>{sample.source_kor}</SourceKor>
				</TodayStc>
				<Input>
					<textarea placeholder={placeholder} />
					<Menu>
						<Icons>
							<img src={Copy} alt="copy" />
							<img src={Listen} alt="listen" />
							<img src={Trans} alt="translate" />
						</Icons>
						<Button>영작 완료</Button>
					</Menu>
				</Input>
				<ListContainer>
					<SortMenu>
						{sorts.map((s, idx) =>
							s === nowSort ? (
								<Sort key={idx} name={s} mark={true} />
							) : (
								<Sort key={idx} name={s} mark={false} />
							)
						)}
					</SortMenu>
				</ListContainer>
			</Wrap>
		</>
	);
}

export default Main;
