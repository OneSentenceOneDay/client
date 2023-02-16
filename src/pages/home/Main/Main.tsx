import {
	TodayStc,
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
	Sorted,
	SortMenu,
	MailSection,
	MailText,
	MailInput,
	TopText,
	BottomText,
	InputDiv,
	InputBut,
	InputSec,
} from "./styled";
import { Wrap } from "./../../../components/styled";
import Copy from "../../../assets/icons/copy-icon.svg";
import Listen from "../../../assets/icons/listen-icon.svg";
import Trans from "../../../assets/icons/trans-icon.svg";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Com from "components/Comment";
import Pagination from "components/Pagination";
import DateComponent, { CalcToday } from "components/DateComponent";
import FooterComponent from "components/Footer";
import Login from "pages/auth/Login/Login";

const today = CalcToday();

type stcType = {
	date: string;
	eng: string;
	sentence: string;
	sentence_kor: string;
	source: string;
	source_kor: string;
};

const sample: stcType = {
	date: today,
	eng: "is on his way ~",
	sentence: "Instead of seeing stars, he is on his way to becoming one.",
	sentence_kor: "별을 보는 대신, 그는 별이 되는 길을 가고 있다.",
	source: "- The New York Times sport",
	source_kor: "출처: 뉴욕타임스 스포츠",
};

type commetType = {
	id: number;
	name: string;
	contents: string;
	hearts: number;
};

const sample2: commetType[] = [
	{
		id: 0,
		name: "허리 케인",
		contents:
			"It's one of those things where She’s supposed to be on her way to work.",
		hearts: 12,
	},
	{
		id: 1,
		name: "sony",
		contents:
			"She wants to know the closest sushi place, make a reservation and be on her way.",
		hearts: 11,
	},
	{
		id: 2,
		name: "허리 케인",
		contents: "She's probably hungry and on her way to lunch.",
		hearts: 10,
	},
	{
		id: 3,
		name: "익명0011",
		contents:
			"It's one of those things where She’s supposed to be on her way to work.",
		hearts: 9,
	},
	{
		id: 4,
		name: "허리 케인",
		contents:
			"It's one of those things where I'm supposed to be on my way out the door to work, and my wife finds me over at the puzzle table.",
		hearts: 8,
	},
];

const placeholder = sample.eng + " 를 사용하여 영작하기"; // 영작 input placeholder

function Main() {
	// ************ 정렬 버튼 ************
	const sorts = ["좋아요순", "최신순", "내가 쓴 문장"];
	const [nowSort, setNowSort] = useState("좋아요순");
	type SortProps = {
		name: string;
		mark: boolean;
	};

	const Sort = ({ name, mark }: SortProps) => {
		if (mark) {
			return (
				<Sorted
					flag={mark}
					onClick={() => {
						setNowSort(name);
					}}
				>
					{name}
				</Sorted>
			);
		} else {
			return (
				<Sorted
					flag={mark}
					onClick={() => {
						setNowSort(name);
					}}
				>
					{name}
				</Sorted>
			);
		}
	};

	// ************ 오늘의 구문이 포함되어 있는지 ************
	const [writing, setWriting] = useState<string>("");
	useEffect(() => {
		if (sample.eng.includes(writing)) {
		}
	}, []);

	// ************ open login modal ************
	type ChildProps = {
		openLogin: boolean;
	};
	const { openLogin } = useOutletContext<ChildProps>();

	return (
		<Wrap>
			{openLogin && <Login />}
			<TodayStc>
				<DateComponent date={today} page={"main"} />
				<Text>오늘의 구문을 사용하여 영어 글쓰기를 연습해 보세요.</Text>
				<Eng>{sample.eng}</Eng>
				<Sentence>{sample.sentence}</Sentence>
				<SentenceKor>{sample.sentence_kor}</SentenceKor>
				<Source>{sample.source}</Source>
				<SourceKor>{sample.source_kor}</SourceKor>
			</TodayStc>
			<Input>
				<textarea
					placeholder={placeholder}
					onChange={(e) => {
						setWriting(e.target.value);
					}}
				/>
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
				{sample2.map((c) => (
					<Com
						key={c.id}
						id={c.id}
						name={c.name}
						contents={c.contents}
						hearts={c.hearts}
					/>
				))}
				<Pagination />
				<MailSection>
					<MailText>
						<TopText>
							{
								"osod의 하루 한 문장 영어 글쓰기 연습을\n메일로 받아 보길 원하시나요?"
							}
						</TopText>
						<BottomText>이름과 이메일을 남겨주세요.</BottomText>
					</MailText>
					<MailInput>
						<InputSec>
							<InputDiv position={"up"}>
								<input placeholder="이름을 입력하세요" />
							</InputDiv>
							<InputDiv position={"down"}>
								<input placeholder="Email 입력하세요" />
							</InputDiv>
						</InputSec>
						<InputBut>구독</InputBut>
					</MailInput>
				</MailSection>
				<FooterComponent />
			</ListContainer>
		</Wrap>
	);
}

export default Main;
