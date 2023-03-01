import Com from "components/Comment";
import DateComponent, { CalcToday } from "components/DateComponent";
import FooterComponent from "components/Footer";
import { useState } from "react";
import {
	Name,
	Nickname,
	History,
	HistoryItem,
	ItemName,
	ItemCount,
	Text,
	Sentence,
	MiddleSection,
	Eng,
	Days,
	Day,
} from "./styled";
import { Wrap } from "./../../components/styled";

const sample = {
	id: 0,
	name: "niceonesony",
	contents:
		"We want to know the closest sushi place, make a reservation and be on our way",
	hearts: 11,
	bool_like: true,
};

const days = ["1/19", "1/18", "1/17", "1/16", "1/15", "1/14", "1/13"];

const sample2 = {
	day: "2023.01.19 목요일",
	sentences: [
		{
			id: 0,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
	],
};

type historyItem = {
	name: string;
	count: string;
};

export function HistoryItems({ name, count }: historyItem) {
	return (
		<HistoryItem>
			<ItemName>{name}</ItemName>
			<ItemCount>{count}</ItemCount>
		</HistoryItem>
	);
}

const today = CalcToday();

function Sectences() {
	const [select, setSelect] = useState(days[0]);
	return (
		<Wrap>
			<Name>손흥민</Name>
			<Nickname>@niceonesony</Nickname>
			<History>
				<HistoryItems name={"영어 작문"} count={"33"} />
				<HistoryItems name={"좋아요 받은 횟수"} count={"12"} />
				<HistoryItems name={"연속 학습"} count={"11일째"} />
			</History>
			<Sentence flag={false}>
				<Text>오늘 작성한 문장</Text>
				<MiddleSection>
					<DateComponent date={today} page={"mypage"} />
					<Eng>is on his way~</Eng>
				</MiddleSection>
				{/* <Com
					key={c.id}
					id={sample.id}
					postId={c.id}
					name={sample.name}
					contents={sample.contents}
					hearts={sample.hearts}
					bool_like={sample.bool_like}
				/> */}
			</Sentence>
			<Sentence flag={true}>
				<Text>그동안 연습했던 문장이에요!</Text>
				<Days>
					{days.map((d) =>
						d === select ? (
							<Day
								flag={true}
								onClick={() => {
									setSelect(d);
								}}
							>
								{d}
							</Day>
						) : (
							<Day
								flag={false}
								onClick={() => {
									setSelect(d);
								}}
							>
								{d}
							</Day>
						)
					)}
				</Days>
				<MiddleSection>
					<DateComponent date={today} page={"mypage"} />
					<Eng>is on his way~</Eng>
				</MiddleSection>
				{/* {sample2.sentences.map((c) => (
					<Com
						key={c.id}
						id={c.id}
						postId={c.id}
						name={c.name}
						contents={c.contents}
						hearts={c.hearts}
						bool_like={c.bool_like}
					/>
				))} */}
			</Sentence>
			<FooterComponent />
		</Wrap>
	);
}

export default Sectences;
