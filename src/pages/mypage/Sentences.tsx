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
		},
		{
			id: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
	],
};

type historyItem = {
	name: string;
	count: number;
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
				<HistoryItems name={"영어 작문"} count={33} />
				<HistoryItems name={"좋아요 받은 횟수"} count={12} />
				<HistoryItems name={"접속일"} count={111} />
			</History>
			<Sentence flag={false}>
				<Text>오늘 작성한 문장</Text>
				<MiddleSection>
					<DateComponent date={today} page={"mypage"} />
					<Eng>is on his way~</Eng>
				</MiddleSection>
				<Com
					id={sample.id}
					name={sample.name}
					contents={sample.contents}
					hearts={sample.hearts}
				/>
			</Sentence>
			<Sentence flag={true}>
				<Text>일주일 동안 연습했던 문장이에요!</Text>
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
				{sample2.sentences.map((c) => (
					<Com
						key={c.id}
						id={c.id}
						name={c.name}
						contents={c.contents}
						hearts={c.hearts}
					/>
				))}
			</Sentence>
			<FooterComponent />
		</Wrap>
	);
}

export default Sectences;
