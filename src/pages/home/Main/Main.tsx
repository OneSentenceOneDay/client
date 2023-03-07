import {
	TodayStc,
	Text,
	Eng,
	Sentence,
	Source,
	SentenceKor,
	SourceKor,
	Writing,
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
	WarningText,
	NoSentences,
	NoSentencesText,
	TransModal,
} from "./styled";
import { Wrap } from "./../../../components/styled";
import Copy from "../../../assets/icons/copy-icon.svg";
import Listen from "../../../assets/icons/listen-icon.svg";
import Trans from "../../../assets/icons/trans-icon.svg";
import { useEffect, useState, Dispatch, SetStateAction, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Com from "components/Comment";
import Pagination from "components/Pagination";
import DateComponent, { CalcToday } from "components/DateComponent";
import FooterComponent from "components/Footer";
import Login from "pages/auth/Login/Login";
import { getData } from "../../../apis/main";
import axios from "axios";
import { Modal } from "components/Modal";
import closeModal from "apis/closeModal";
import {
	Backdrop,
	DialogBox,
	Input,
	ModalContainer,
} from "pages/auth/Login/styled";

const BASE_URL = process.env.REACT_APP_API;

const today = CalcToday();

function Main() {
	// ************************ 정렬 컴포넌트 ************************
	const sorts = [
		{
			kor: "좋아요순",
			eng: "likes",
		},
		{
			kor: "최신순",
			eng: "latest",
		},
		{
			kor: "내가 쓴 문장",
			eng: "my",
		},
	];
	const [nowSort, setNowSort] = useState<string>("likes");
	type SortProps = {
		name: string;
		eng: string;
		mark: boolean;
	};

	function clickSort(eng: string) {
		if (!sessionStorage.getItem("access_token") && eng === "my") {
			// 비로그인 시 내가 쓴 문장 확인 불가 -> 로그인 유도
			setOpenLogin(true);
		} else {
			setNowSort(eng);
		}
	}

	const Sort = ({ name, eng, mark }: SortProps) => {
		if (mark) {
			return (
				<Sorted
					flag={mark}
					onClick={() => {
						clickSort(eng);
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
						clickSort(eng);
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
			url: `${BASE_URL}/writing/main/`,
		}).then((res) => {
			setSentence(res.data.postList[0]);
		});
		setLoading(false);
	}, []);

	// ************************ get 작성된 문장 ************************
	const [post, setPost] = useState<any>([]);
	const [pages, setPages] = useState<number>(1);
	const [page, setPage] = useState<number>(1);

	function getSentences() {
		if (sentence.id) {
			setLoading(true);
			axios({
				method: "get",
				url: `${BASE_URL}/writing/post/order/${sentence.id}/query=${nowSort}/?page=${page}`,
				headers: {
					Authorization: sessionStorage.getItem("access_token")
						? `Bearer ${sessionStorage.getItem("access_token")}`
						: "",
				},
			}).then((res) => {
				setPost(res.data.postList);
				setPages(res.data.pageCnt);
			});
			setLoading(false);
		}
	}

	useEffect(() => {
		getSentences();
	}, [sentence, page, nowSort]);

	// ************************ get 작성된 문장 개수 ************************
	const [postcnt, setPostcnt] = useState<number>(0);
	function getCnt() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/post/todaypostcnt/`,
		}).then((res) => {
			setPostcnt(res.data.today_postcnt);
		});
		setLoading(false);
	}

	useEffect(() => {
		getCnt();
	}, []);

	// ************************ 좋아요 클릭 ************************
	async function clickLikes(id: number) {
		await axios({
			method: "get",
			url: `${BASE_URL}/writing/post/${id}/likes/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				getSentences();
				console.log(res);
			})
			.catch(() => setOpenLogin(true));
	}

	// ************************ 오늘의 구문이 포함되어 있는지 ************************
	const [writing, setWriting] = useState<string>(""); // 작성한 문장
	const [noWarning, setNoWarning] = useState<boolean | null>(null);
	function isWarning() {
		if (writing.toLowerCase().includes(sentence.sentence)) {
			setNoWarning(true);
		} else {
			setNoWarning(false);
		}
	}

	// ************************ 문장 작성 ************************
	async function saveSentence() {
		console.log(noWarning);
		if (noWarning) {
			setLoading(true);
			await axios({
				method: "post",
				url: `${BASE_URL}/writing/post/create/${sentence.id}/`,
				headers: {
					Authorization: sessionStorage.getItem("access_token")
						? `Bearer ${sessionStorage.getItem("access_token")}`
						: "",
				},
				data: { body: writing },
			}).then(() => {
				getSentences();
				getCnt();
				setNoWarning(null);
				setLoading(false);
				setNowSort("latest");
				setWriting("");
			});
		}
	}
	useEffect(() => {
		saveSentence();
	}, [noWarning]);

	// ************************ 로그인 모달 ************************
	const [openLogin, setOpenLogin] = useOutletContext<any>();

	// ************************ 구글 로그인 시 ************************
	const [firstGoogle, setFirstGoogle] = useState<boolean>(false); // 구글 로그인 처음인지 유무
	const [nickname, setNickname] = useState<string>("");
	const [nameError, setNameError] = useState<boolean>(true); // 이름 혹은 닉네임 에러 확인

	// 이름 및 닉네임 설정
	function setNameAndNickname() {
		axios({
			method: "post",
			url: `${BASE_URL}/accounts/make-nickname/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
			data: { nickname: nickname },
		})
			.then((r) => {
				console.log(r);
				sessionStorage.setItem("nickname", nickname);
				sessionStorage.setItem("name", r.data.name);
				setFirstGoogle(false);
				setFirst(true);
			})
			.catch((e) => {
				console.log(e.response.data.detail);
				setNameError(false);
			});
	}

	useEffect(() => {
		setNameError(true);
	}, [nickname]);

	// ************************ 구독 신청 ************************
	const [subModal, setSubModal] = useState<boolean>(false);

	const [first, setFirst] = useState<boolean>(false); // 최초 로그인 유무

	function clickSubYes() {
		axios({
			method: "get",
			url: `${BASE_URL}/accounts/change-sub/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		});
		setFirst(false);
		window.location.reload(); // 새로고침
	}

	function clickSubNo() {
		setFirst(false);
		window.location.reload(); // 새로고침
	}

	// ************************ 비로그인 유저 구독 신청 ************************
	const [subName, setSubName] = useState<string>("");
	const [subEmail, setSubEmail] = useState<string>("");

	function subAsNonUser() {
		axios({
			method: "post",
			url: `${BASE_URL}/writing/post/subscription/create/`,
			data: { sub_email: subEmail, sub_nickname: subName },
		});
	}

	// ************************ 번역 ************************
	const [trans, setTrans] = useState<string>("");
	const [showTrans, setShowTrans] = useState<boolean>(false);

	async function clickTrans(body: string) {
		await axios({
			method: "post",
			url: `${BASE_URL}/writing/translate/`,
			data: {
				text: body,
			},
		}).then((res) => {
			setTrans(res.data.translation);
			console.log(res.data.translation);
			setShowTrans(true);
			console.log(showTrans);
		});
	}

	// ************************ 번역 모달 창 닫기 ************************

	const outsideRef = useRef<HTMLDialogElement | null>(null);
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (outsideRef.current && !outsideRef.current.contains(event.target)) {
				setShowTrans(false);
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [outsideRef]);
	// closeModal()

	if (loading) return <Wrap>로딩중 ...</Wrap>;

	return (
		<Wrap>
			{openLogin && (
				<Login
					openLogin={openLogin}
					setOpenLogin={setOpenLogin}
					setFirst={setFirst}
					setGoogle={setFirstGoogle}
				/>
			)}
			{first && (
				<Modal
					title={"Email 구독 신청"}
					body={"하루 한 문장 영어 글쓰기 연습을\n메일로 받아 보길 원하시나요?"}
					button={"네"}
					button2={"아니요"}
					onclick={clickSubYes}
					onclick2={clickSubNo}
				/>
			)}
			{firstGoogle && (
				<ModalContainer>
					<DialogBox page={"login"}>
						<Text style={{ marginBottom: "1rem" }}>닉네임을 설정해 주세요</Text>
						<Input noWarning={nameError} page="">
							<input
								placeholder="Nickname"
								onChange={(e) => {
									setNickname(e.target.value);
								}}
							/>
						</Input>
						<WarningText noWarning={nameError}>
							* 중복이거나 잘못된 닉네임입니다
						</WarningText>
						<button onClick={setNameAndNickname}>확인</button>
					</DialogBox>
					<Backdrop />
				</ModalContainer>
			)}
			{subModal && <Modal body={"구독 신청이 되었습니다."} button={"확인"} />}
			<TodayStc>
				<DateComponent date={today} page={"main"} />
				<Text>오늘의 구문을 사용하여 영어 글쓰기를 연습해 보세요.</Text>
				<Eng>{sentence.sentence}</Eng>
				<Sentence>{sentence.discription}</Sentence>
				<SentenceKor>{sentence.translate}</SentenceKor>
				<Source>- {sentence.source}</Source>
			</TodayStc>
			<Writing noWarning={noWarning}>
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
						<img
							src={Trans}
							alt="translate"
							onClick={() => {
								clickTrans(writing);
							}}
						/>
					</Icons>
					<Button onClick={isWarning}>영작 완료</Button>
				</Menu>
				<WarningText noWarning={noWarning}>
					* 오늘의 구문을 활용하여 문장을 만들어주세요!
				</WarningText>
			</Writing>
			<ListContainer>
				{false ? (
					// {postcnt === 0 ? (
					<NoSentences>
						<Cnt>오늘 하루 {postcnt}개의 영작문이 있어요!</Cnt>
						<NoSentencesText>
							✏️ 첫 번째 영문장을 작성해 보세요.
						</NoSentencesText>
					</NoSentences>
				) : (
					<>
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
						{showTrans && <TransModal ref={outsideRef}>{trans}</TransModal>}
						{post.map((c: any) => (
							<Com
								key={c.id}
								id={c.unknown ? null : c.user.id}
								postId={c.id}
								name={c.unknown ? c.unknown : c.user.nickname}
								contents={c.body}
								hearts={c.like_num}
								bool_like={c.bool_like}
								clickLikes={clickLikes}
								clickTrans={clickTrans}
							/>
						))}
						<Pagination pages={pages} page={page} setPage={setPage} />{" "}
					</>
				)}

				<MailSection>
					<MailText
						login={sessionStorage.getItem("access_token") ? true : false}
					>
						<TopText>
							{
								"osod의 하루 한 문장 영어 글쓰기 연습을\n메일로 받아 보길 원하시나요?"
							}
						</TopText>
						{sessionStorage.getItem("access_token") ? (
							""
						) : (
							<BottomText>이름과 이메일을 남겨주세요.</BottomText>
						)}
					</MailText>
					{sessionStorage.getItem("access_token") ? (
						<InputBut login={true} onClick={clickSubYes}>
							구독
						</InputBut>
					) : (
						<MailInput>
							<InputSec>
								<InputDiv position={"up"}>
									<input
										placeholder="이름을 입력하세요"
										onChange={(e) => {
											setSubName(e.target.value);
										}}
									/>
								</InputDiv>
								<InputDiv position={"down"}>
									<input
										placeholder="Email을 입력하세요"
										onChange={(e) => {
											setSubEmail(e.target.value);
										}}
									/>
								</InputDiv>
							</InputSec>
							<InputBut login={false} onClick={subAsNonUser}>
								구독
							</InputBut>
						</MailInput>
					)}
				</MailSection>
				<FooterComponent />
			</ListContainer>
		</Wrap>
	);
}

export default Main;
