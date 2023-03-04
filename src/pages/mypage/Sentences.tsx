import Com from "components/Comment";
import DateComponent, { CalcToday } from "components/DateComponent";
import FooterComponent from "components/Footer";
import { useState, useEffect } from "react";
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
	NoTodayPost,
} from "./styled";
import { Wrap } from "./../../components/styled";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

const sample = {
	id: 0,
	name: "niceonesony",
	contents:
		"We want to know the closest sushi place, make a reservation and be on our way",
	hearts: 11,
	bool_like: true,
};

const days = ["1", "2", "3", "4", "5", "6", "7"];

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
	// ************************ 연속 학습 이모티콘 ************************
	const emojiList = "😀😃😄😁😆😍🥰❤️‍🔥🔥🌟👑";
	const [emoji, setEmoji] = useState<string>("");
	function todayEmoji(day: number) {
		if (day < 1) {
			setEmoji("");
		} else if (day < 8) {
			setEmoji(emojiList[day - 1]);
		} else if (day < 10) {
			setEmoji("❤️‍🔥");
		} else if (day < 12) {
			setEmoji("🔥");
		} else if (day < 14) {
			setEmoji("🌟");
		} else {
			setEmoji("👑");
		}
	}

	// ************************ get user detail ************************
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<any>([]);

	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/userdetail/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			setUser(res.data);
			todayEmoji(res.data.continuous_cnt);
			// console.log(res.data);
		});
		setLoading(false);
	}, []);

	// ************************ get 오늘 쓴 문장 ************************
	const [todayPost, setTodyPost] = useState<any>([]);
	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/today/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			setTodyPost(res.data);
			console.log(res.data);
		});
		setLoading(false);
	}, []);

	// ************************ get 일주일 날짜 ************************
	const [week, setWeek] = useState<any>([]);
	const [select, setSelect] = useState<string>("");
	const [date, setDate] = useState<string>(""); // 요일별 작성 문장을 얻기 위한 변수 (02%12 형태)

	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/get_dates/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			getWeek(res.data);
		});
	}, []);

	function getWeek(strObj: any) {
		let temp: string[] = [];
		for (let objKey in strObj) {
			if (strObj.hasOwnProperty(objKey)) {
				temp.push(strObj[objKey]);
			}
		}
		setWeek(temp);
		setSelect(temp[0]);
		setLoading(false);
	}

	// ************************ get 요일별 작성 문장 ************************
	useEffect(() => {
		const [mon, day] = select.split("/");
		setDate(`${mon}%${day}`);
	}, [select]);

	useEffect(() => {
		if (date) {
			setLoading(true);
			axios({
				method: "get",
				url: `${BASE_URL}/writing/mypage/query=${date}/`,
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
				},
			}).then((res) => {
				console.log(res);
			});
		}
	}, [date]);

	if (loading) <div>로딩 중 ...</div>;

	return (
		<Wrap>
			<Name>{sessionStorage.getItem("nickname")}</Name>
			<Nickname>{sessionStorage.getItem("email")}</Nickname>
			<History>
				<HistoryItems name={"영어 작문"} count={user.post_num} />
				<HistoryItems name={"좋아요 받은 횟수"} count={user.liked_num} />
				<HistoryItems
					name={"연속 학습"}
					count={user.continuous_cnt + "일째 " + emoji}
				/>
			</History>
			<Sentence flag={false}>
				<Text>오늘 작성한 문장</Text>
				<MiddleSection>
					<DateComponent date={today} page={"mypage"} />
					<Eng>is on his way~</Eng>
				</MiddleSection>
				{todayPost.length === 0 && (
					<NoTodayPost>오늘 작성한 글이 없습니다.</NoTodayPost>
				)}
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
					{week.map((d: string) =>
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
					<DateComponent date={select} page={"mypage"} />
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
