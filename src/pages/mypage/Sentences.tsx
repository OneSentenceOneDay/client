import Com from "components/Comment";
import DateComponent, { CalcToday } from "components/DateComponent";
import { useNavigate, useNavigation } from "react-router-dom";
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
	HistoryItemLong,
	StampContainer,
	StampItem,
	Stamp,
	Week,
} from "./styled";
import { Wrap } from "components/styled";
import axios from "axios";
import Edit from "assets/icons/edit-icon.svg";
import Medal from "assets/icons/medal-icon2.svg";
import Writing from "assets/icons/writing-icon.svg";
import Hearts from "assets/icons/hearts-icon.svg";
import { Modal } from "components/Modal";
import Loading from "components/Loading";
import tokenNotValid from "apis/tokenNotValid";
import Stamp1 from "assets/images/stamp1.svg";
import Stamp2 from "assets/images/stamp2.svg";
import Stamp3 from "assets/images/stamp3.svg";
import Stamp4 from "assets/images/stamp4.svg";
import Stamp5 from "assets/images/stamp5.svg";
import Stamp6 from "assets/images/stamp6.svg";
import Stamp7 from "assets/images/stamp7.svg";
import Mon from "assets/images/mon.svg";
import Tue from "assets/images/tue.svg";
import Wed from "assets/images/wed.svg";
import Thu from "assets/images/thu.svg";
import Fri from "assets/images/fri.svg";
import Sat from "assets/images/sat.svg";
import Sun from "assets/images/sun.svg";

const BASE_URL = process.env.REACT_APP_API;

type historyItemType = {
	name: string;
	count: string;
	img: any;
};

export function HistoryItems({ name, count, img }: historyItemType) {
	return (
		<HistoryItem>
			<img src={img} />
			<ItemName long={false}>{name}</ItemName>
			<ItemCount>{count}</ItemCount>
		</HistoryItem>
	);
}

const today = CalcToday();

function Sectences() {
	const navigate = useNavigate();

	// ************************ get user detail ************************
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<any>([]);

	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/userdetail/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				setUser(res.data);
				// todayEmoji(res.data.continuous_cnt);
				setLoading(false);
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				}
			});
	}, []);

	// ************************ get 오늘 쓴 문장 ************************
	const [todayPost, setTodyPost] = useState<any>([]);

	function getTodayPost() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/today/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				setTodyPost(res.data);
				setLoading(false);
				// console.log(res.data);
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				}
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

	const [todySentence, setTodaySentence] = useState<string>("");

	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/get_dates/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				getWeek(res.data);
				setTodaySentence(res.data.today_sentence);
				// console.log(res.data);
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				}
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
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			})
				.then((res) => {
					setPosts(res.data);
				})
				.catch((e) => {
					setPosts([]);
					if (e.response.data.code === "token_not_valid") {
						tokenNotValid();
						navigate("/");
						window.location.reload(); // 새로고침
					}
				});
		}
	}, [date]);

	// ************************ 좋아요 클릭 ************************
	async function clickLikes(id: number) {
		await axios({
			method: "get",
			url: `${BASE_URL}/writing/post/${id}/likes/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then(() => {
				getTodayPost();
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				}
			});
	}

	// ************************ 닉네임 변경 ************************
	const [nicknameChangeModal, setNicknameChangeModal] =
		useState<boolean>(false);
	const [newNickname, setNewNickname] = useState<string>("");
	const [nameError, setNameError] = useState<boolean>(true); // 닉네임 에러 확인

	async function changeNickname() {
		await axios({
			method: "post",
			url: `${BASE_URL}/accounts/change-nickname/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			data: {
				nickname: newNickname,
			},
		})
			.then((res) => {
				// console.log(res);
				localStorage.setItem("nickname", res.data.nickname);
				alert("변경되었습니다.");
				setNicknameChangeModal(false);
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				} else {
					// alert(e.response.data.detail);
					setNameError(false);
				}
			});
	}

	function closeNicknameChangeModal() {
		setNicknameChangeModal(false);
	}

	// ************************ 스탬프 ************************

	const stamp = [
		{ id: 0, week: "Mon", img: Stamp1, none: Mon },
		{ id: 1, week: "Tue", img: Stamp2, none: Tue },
		{ id: 2, week: "Wed", img: Stamp3, none: Wed },
		{ id: 3, week: "Thu", img: Stamp4, none: Thu },
		{ id: 4, week: "Fri", img: Stamp5, none: Fri },
		{ id: 5, week: "Sat", img: Stamp6, none: Sat },
		{ id: 6, week: "Sun", img: Stamp7, none: Sun },
	];

	const [isWriting, setIsWriting] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

	useEffect(() => {
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/week/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			setIsWriting(res.data.week_is_writing);
			console.log(res.data.week_is_writing);
		});
	}, []);

	if (loading) <Loading />;

	return (
		<Wrap>
			{nicknameChangeModal && (
				<Modal
					body="새 닉네임을 설정해주세요"
					input={true}
					button="확인"
					button2="취소"
					placeholder="Nickname"
					onclick={changeNickname}
					onclick2={closeNicknameChangeModal}
					setState={setNewNickname}
					warning={nameError}
				/>
			)}
			<Name>
				{localStorage.getItem("nickname")}{" "}
				<img
					src={Edit}
					onClick={() => {
						setNicknameChangeModal(true);
					}}
				/>
			</Name>
			<Nickname>{localStorage.getItem("email")}</Nickname>
			<History>
				<HistoryItems name={"연속 학습 랭킹"} count={"54등"} img={Medal} />
				<HistoryItems
					name={"영어 작문"}
					count={user.post_num + "개"}
					img={Writing}
				/>
				<HistoryItems
					name={"받은 좋아요"}
					count={user.liked_num + "개"}
					img={Hearts}
				/>
			</History>
			<HistoryItemLong>
				<ItemName long={true}>연속 학습</ItemName>
				<ItemCount>{user.continuous_cnt + "일째"}</ItemCount>
				<StampContainer>
					{stamp.map((s) => (
						<StampItem key={s.id}>
							<Week>{s.week}</Week>
							<Stamp>
								{isWriting[s.id] ? <img src={s.img} /> : <img src={s.none} />}
							</Stamp>
						</StampItem>
					))}
				</StampContainer>
			</HistoryItemLong>
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
					/>
				))}
			</Sentence>
			<FooterComponent />
		</Wrap>
	);
}

export default Sectences;
