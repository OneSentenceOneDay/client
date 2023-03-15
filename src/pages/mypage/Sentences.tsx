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
import Emoji1 from "../../assets/icons/emoji-icon-1.svg";
import Emoji2 from "../../assets/icons/emoji-icon-2.svg";
import Emoji3 from "../../assets/icons/emoji-icon-3.svg";
import Emoji4 from "../../assets/icons/emoji-icon-4.svg";
import Emoji5 from "../../assets/icons/emoji-icon-5.svg";
import Emoji6 from "../../assets/icons/emoji-icon-6.svg";
import Emoji7 from "../../assets/icons/emoji-icon-7.svg";
import Emoji8 from "../../assets/icons/emoji-icon-8.svg";
import Emoji9 from "../../assets/icons/emoji-icon-9.svg";
import Emoji10 from "../../assets/icons/emoji-icon-10.svg";
import Emoji11 from "../../assets/icons/emoji-icon-11.svg";

const BASE_URL = process.env.REACT_APP_API;

type historyItem = {
	name: string;
	count: string;
	img: any;
};

export function HistoryItems({ name, count, img }: historyItem) {
	return (
		<HistoryItem>
			<ItemName>{name}</ItemName>
			<ItemCount>
				{count}
				<img src={img} />
			</ItemCount>
		</HistoryItem>
	);
}

const today = CalcToday();

function Sectences() {
	// ************************ 연속 학습 이모티콘 ************************

	const [emoji, setEmoji] = useState<any>("");
	function todayEmoji(day: number) {
		if (day < 1) {
			setEmoji("");
		} else if (day < 2) {
			setEmoji(Emoji1);
		} else if (day < 3) {
			setEmoji(Emoji2);
		} else if (day < 3) {
			setEmoji(Emoji3);
		} else if (day < 4) {
			setEmoji(Emoji4);
		} else if (day < 5) {
			setEmoji(Emoji5);
		} else if (day < 6) {
			setEmoji(Emoji6);
		} else if (day < 7) {
			setEmoji(Emoji7);
		} else if (day < 10) {
			setEmoji(Emoji8);
		} else if (day < 12) {
			setEmoji(Emoji9);
		} else if (day < 14) {
			setEmoji(Emoji10);
		} else {
			setEmoji(Emoji11);
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
		})
			.then((res) => {
				setUser(res.data);
				todayEmoji(res.data.continuous_cnt);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	// ************************ get 오늘 쓴 문장 ************************
	const [todayPost, setTodyPost] = useState<any>([]);
	const [todySentence, setTodaySentence] = useState<string>("");

	function getTodayPost() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/today/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			setTodyPost(res.data);
			setTodaySentence(res.data[0].sentence.sentence);
			setLoading(false);
			console.log(res.data);
		});
	}
	useEffect(() => {
		getTodayPost();
	}, []);

	// ************************ get 일주일 날짜 ************************
	const [week, setWeek] = useState<any>([]);
	const [select, setSelect] = useState<string>("");
	const [date, setDate] = useState<string>(""); // 요일별 작성 문장을 얻기 위한 변수 (02%12 형태)
	const [sentences, setSentences] = useState<string>("");

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
		let temp = [];
		for (let objKey in strObj) {
			if (strObj.hasOwnProperty(objKey)) {
				temp.push(strObj[objKey]);
			}
		}
		temp.shift();
		setWeek(temp);
		setSelect(temp[0].detail);
		setDate(temp[0].summary);
		setSentences(temp[0].sentence);
		setLoading(false);
	}

	// ************************ get 요일별 작성 문장 ************************
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (date) {
			setLoading(true);
			axios({
				method: "get",
				url: `${BASE_URL}/writing/mypage/query=${date.replace("/", "&")}/`,
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
				},
			})
				.then((res) => {
					setPosts(res.data);
				})
				.catch((e) => {
					setPosts([]);
				});
		}
	}, [date]);

	// ************************ 좋아요 클릭 ************************
	async function clickLikes(id: number) {
		await axios({
			method: "get",
			url: `${BASE_URL}/writing/post/${id}/likes/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			getTodayPost();
		});
	}

	if (loading) <div>로딩 중 ...</div>;

	return (
		<Wrap>
			<Name>{sessionStorage.getItem("nickname")}</Name>
			<Nickname>{sessionStorage.getItem("email")}</Nickname>
			<History>
				<HistoryItems name={"영어 작문"} count={user.post_num} img={""} />
				<HistoryItems
					name={"좋아요 받은 횟수"}
					count={user.liked_num}
					img={""}
				/>
				<HistoryItems
					name={"연속 학습"}
					count={user.continuous_cnt + "일째 "}
					img={emoji}
				/>
			</History>
			<Sentence flag={false}>
				<Text>오늘 작성한 문장</Text>
				<MiddleSection>
					<DateComponent date={today} page={"mypage"} />
					<Eng>{todySentence}</Eng>
				</MiddleSection>
				{todayPost.length === 0 && (
					<NoTodayPost>작성한 글이 없습니다.</NoTodayPost>
				)}
				{todayPost.map((c: any) => (
					<Com
						key={c.id}
						id={c.unknown ? null : c.user.id}
						postId={c.id}
						name={c.unknown ? c.unknown : c.user.nickname}
						contents={c.body}
						hearts={c.like_num}
						bool_like={c.bool_like}
						clickLikes={clickLikes}
						// clickTrans={clickTrans}
					/>
				))}
			</Sentence>
			<Sentence flag={true}>
				<Text>그동안 연습했던 문장이에요!</Text>
				<Days>
					{week.map((d: any) =>
						d.detail === select ? (
							<Day
								flag={true}
								onClick={() => {
									setSelect(d.detail);
									setDate(d.summary);
									setSentences(d.sentence);
								}}
							>
								{d.summary}
							</Day>
						) : (
							<Day
								flag={false}
								onClick={() => {
									setSelect(d.detail);
									setDate(d.summary);
									setSentences(d.sentence);
								}}
							>
								{d.summary}
							</Day>
						)
					)}
				</Days>
				<MiddleSection>
					<DateComponent date={select} page={"mypage"} />
					<Eng>{sentences}</Eng>
				</MiddleSection>
				{posts.length === 0 && <NoTodayPost>작성한 글이 없습니다.</NoTodayPost>}
				{posts.map((c: any) => (
					<Com
						key={c.id}
						id={c.unknown ? null : c.user.id}
						postId={c.id}
						name={c.unknown ? c.unknown : c.user.nickname}
						contents={c.body}
						hearts={c.like_num}
						bool_like={c.bool_like}
						clickLikes={clickLikes}
						// clickTrans={clickTrans}
					/>
				))}
			</Sentence>
			<FooterComponent />
		</Wrap>
	);
}

export default Sectences;
