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
	Sorted,
	SortMenu,
	LikeSort,
	LatestSort,
	MineSort,
	Comment,
	Name,
	Contents,
	Num,
	HeartDiv,
	Right,
	BottomDiv,
	PageSection,
	PageDiv,
	MailSection,
	MailText,
	MailInput,
	TopText,
	BottomText,
	InputDiv,
	InputBut,
	InputSec,
	Footer,
	Member,
	Copyright,
} from "./styled";

import Copy from "../../../assets/icons/copy-icon.svg";
import Listen from "../../../assets/icons/listen-icon.svg";
import Trans from "../../../assets/icons/trans-icon.svg";
import Heart from "../../../assets/icons/heart-icon.svg";
import { useEffect, useState } from "react";

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

type stcType = {
	date: string;
	eng: string;
	sentence: string;
	sentence_kor: string;
	source: string;
	source_kor: string;
};

type commetType = {
	id: number;
	name: string;
	contents: string;
	hearts: number;
};
const sample: stcType = {
	date: date,
	eng: "is on his way ~",
	sentence: "Instead of seeing stars, he is on his way to becoming one.",
	sentence_kor: "별을 보는 대신, 그는 별이 되는 길을 가고 있다.",
	source: "- The New York Times sport",
	source_kor: "출처: 뉴욕타임스 스포츠",
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

const placeholder = sample.eng + " 를 사용하여 영작하기";

type SortProps = {
	name: string;
	mark: boolean;
};

export function Com({ id, name, contents, hearts }: commetType) {
	return (
		<Comment>
			<Name>{name}</Name>
			<Right>
				<Contents>{contents}</Contents>
				<BottomDiv>
					<img src={Trans} alt="translate" />
					<HeartDiv>
						<img src={Heart} alt="heart" />
						<Num>{hearts}</Num>
					</HeartDiv>
				</BottomDiv>
			</Right>
		</Comment>
	);
}

function Main() {
	const sorts = ["좋아요순", "최신순", "내가 쓴 문장"];
	const [nowSort, setNowSort] = useState("좋아요순");

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

	const [page, setPage] = useState(1);
	let firstNum = page - (page % 5) + 1;
	let lastNum = page - (page % 5) + 5;
	const [pages, setPages] = useState<number[]>([]);
	const lastPage: number = 10;
	useEffect(() => {
		const tempPages: number[] = [];
		for (let i = firstNum; i <= lastNum; i++) {
			tempPages.push(i);
		}
		setPages(tempPages);
	}, [page]);
	// const tempPages: number[] = [];
	// for (let i = 1; i <= lastPage; i++) {
	// 	tempPages.push(i);
	// }
	// setPages(tempPages);

	const [writing, setWriting] = useState<string>("");
	useEffect(() => {
		if (sample.eng.includes(writing)) {
		}
	});

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
							id={c.id}
							name={c.name}
							contents={c.contents}
							hearts={c.hearts}
						/>
					))}
					<PageSection>
						<PageDiv
							style={{ fontSize: "1rem" }}
							flag={false}
							onClick={() => {
								setPage(1);
							}}
						>
							&#171;
						</PageDiv>
						<PageDiv
							style={{ fontSize: "1rem" }}
							flag={false}
							onClick={() => {
								if (page > 1) {
									setPage(page - 1);
								}
							}}
						>
							&#8249;
						</PageDiv>
						{pages.map((pageNum) =>
							pageNum === page ? (
								<PageDiv
									flag={true}
									key={pageNum}
									onClick={() => setPage(pageNum)}
								>
									{pageNum}
								</PageDiv>
							) : (
								<PageDiv
									flag={false}
									key={pageNum}
									onClick={() => setPage(pageNum)}
								>
									{pageNum}
								</PageDiv>
							)
						)}
						<PageDiv
							style={{ fontSize: "1rem" }}
							flag={false}
							onClick={() => {
								if (lastPage > page) {
									setPage(page + 1);
								}
							}}
						>
							&#8250;
						</PageDiv>
						<PageDiv
							style={{ fontSize: "1rem" }}
							flag={false}
							onClick={() => {
								setPage(lastPage);
							}}
						>
							&#187;
						</PageDiv>
					</PageSection>
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
					<Footer>
						<Member flag={true}>
							{"서비스기획/디자인: 김경화\nbrilliantkkh@naver.com"}
						</Member>
						<Member flag={true}>
							{"프론트엔드개발: 엄소현\nsohy19@hufs.ac.kr"}
						</Member>
						<Member flag={false}>
							{"백엔드개발: 이현제\n201802977@hufs.ac.kr"}
						</Member>
						<Copyright>
							Copyright © osod All Rights Reserved. Prod By. SWYG
						</Copyright>
					</Footer>
				</ListContainer>
			</Wrap>
		</>
	);
}

export default Main;
