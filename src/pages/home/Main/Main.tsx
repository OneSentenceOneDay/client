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
	Cnt,
	MenuContainer,
} from "./styled";
import { Wrap } from "./../../../components/styled";
import Copy from "../../../assets/icons/copy-icon.svg";
import Listen from "../../../assets/icons/listen-icon.svg";
import Trans from "../../../assets/icons/trans-icon.svg";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Com from "components/Comment";
import Pagination from "components/Pagination";
import DateComponent, { CalcToday } from "components/DateComponent";
import FooterComponent from "components/Footer";
import Login from "pages/auth/Login/Login";
import { getData } from "../../../apis/main";
import axios from "axios";
import { Modal } from "components/Modal";

const today = CalcToday();

function Main() {
	// ************************ 정렬 버튼 ************************
	const sorts = [
		{
			kor: "좋아요순",
			eng: "latest",
		},
		{
			kor: "최신순",
			eng: "likes",
		},
		{
			kor: "내가 쓴 문장",
			eng: "my",
		},
	];
	const [nowSort, setNowSort] = useState<string>("latest");
	type SortProps = {
		name: string;
		eng: string;
		mark: boolean;
	};

	const Sort = ({ name, eng, mark }: SortProps) => {
		if (mark) {
			return (
				<Sorted
					flag={mark}
					onClick={() => {
						setNowSort(eng);
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
						setNowSort(eng);
					}}
				>
					{name}
				</Sorted>
			);
		}
	};

	// ************************ get 오늘의 구문 ************************
	const [loading, setLoading] = useState(false);
	const [sentence, setSentence] = useState<any>([]);

	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app/writing/main/`,
		}).then((res) => {
			setSentence(res.data.postList[0]);
			// console.log(res.data.postList[0]);
		});
		setLoading(false);
	}, []);

	// ************************ get 작성된 문장 ************************
	const [post, setPost] = useState<any>([]);
	const [pages, setPages] = useState<number>(1);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		setLoading(true);
		if (sentence.id) {
			axios({
				method: "get",
				url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app/writing/post/order/${sentence.id}/query=${nowSort}/?page=${page}`,
			}).then((res) => {
				setPost(res.data.postList);
				setPages(res.data.pageCnt);
				// console.log(res.data);
			});
			setLoading(false);
		}
	}, [sentence, page, nowSort]);

	// ************************ get 작성된 문장 개수 ************************
	const [postcnt, setPostcnt] = useState<number>(0);

	useEffect(() => {
		setLoading(true);
		axios({
			method: "get",
			url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app/writing/post/todaypostcnt/`,
		}).then((res) => {
			setPostcnt(res.data.today_postcnt);
			// console.log(res.data.today_postcnt);
		});
		setLoading(false);
	}, []);

	function getLikes() {}

	// ************************ 오늘의 구문이 포함되어 있는지 ************************
	const [writing, setWriting] = useState<string>("");
	// useEffect(() => {
	// 	if (sample.eng.includes(writing)) {
	// 	}
	// }, []);

	// ************************ open login modal ************************
	const [openLogin, setOpenLogin] = useOutletContext<any>();

	// ************************ 최초 로그인 확인 ************************
	const [isFirst, setIsFirst] = useState<boolean>(false);

	if (loading) return null;

	return (
		<Wrap>
			{openLogin && <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />}
			{isFirst && <Modal />}
			<TodayStc>
				<DateComponent date={today} page={"main"} />
				<Text>오늘의 구문을 사용하여 영어 글쓰기를 연습해 보세요.</Text>
				<Eng>{sentence.sentence}</Eng>
				<Sentence>{sentence.discription}</Sentence>
				<SentenceKor>{sentence.translate}</SentenceKor>
				{/* <Source>{sentence.postList[0].}</Source>
				<SourceKor>{sentence.postList[0].}</SourceKor> */}
			</TodayStc>
			<Input>
				<textarea
					placeholder={sentence.sentence + " 를 사용하여 영작하기"}
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
				<MenuContainer>
					<Cnt>오늘 하루 {postcnt}개의 영작문이 있어요!</Cnt>
					<SortMenu>
						{sorts.map((s, idx) =>
							s.eng === nowSort ? (
								<Sort key={idx} name={s.kor} eng={s.eng} mark={true} />
							) : (
								<Sort key={idx} name={s.kor} eng={s.eng} mark={false} />
							)
						)}
					</SortMenu>
				</MenuContainer>

				{post.map((c: any) => (
					<Com
						key={c.id}
						id={c.id}
						name={c.unknown ? c.unknown : c.user.nickname}
						contents={c.body}
						hearts={c.like_num}
					/>
				))}
				<Pagination pages={pages} page={page} setPage={setPage} />
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
