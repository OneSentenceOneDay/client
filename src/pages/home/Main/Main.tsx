import {
	TodayStc,
	Text,
	Eng,
	Kor,
	Sentence,
	SentenceKor,
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
	AIIcon,
	CenterSection,
	EventBanner,
	Notice,
	BannerText,
	RigthArrow,
	WritingRank,
	RankItem,
	Ranking,
	NickName,
	Character,
	Title,
	RankItems,
	EventRankingContainer,
	EventTitle,
	EventRankingItems,
	EventRankingItem,
	Likes,
	EventRanking,
	EventNickName,
} from "./styled";
import { Wrap } from "components/styled";
import Copy from "../../../assets/icons/copy-icon.svg";
import RightArrow from "../../../assets/icons/right-arrow-icon.svg";
import Trans from "../../../assets/icons/trans-icon.svg";
import {
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
	useRef,
	useCallback,
} from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Com from "components/Comment";
import Pagination from "components/Pagination";
import DateComponent, { CalcToday } from "components/DateComponent";
import FooterComponent from "components/Footer";
import Login from "pages/auth/Login/Login";
import { getData } from "../../../apis/main";
import axios from "axios";
import { Modal } from "components/Modal";
import closeModal from "apis/closeModal";
import BlueboxModal from "../../../components/BlueboxModal";
import { ModalContainer } from "pages/auth/Login/styled";
import handleCopyClipBoard from "../../../apis/copy";
import Loading from "components/Loading";
import GoogleAdvertise from "components/GoogleAdvertise";
import { DesktopAds, MobileAds } from "./../../../components/styled";
import tokenNotValid from "apis/tokenNotValid";
import EventModal from "../Event/EventModal";
import { useCookies } from "react-cookie";
import Tooltip from "./Tooltip";
import Medal from "assets/icons/medal-icon.svg";
import Character1 from "assets/images/osodi_congrat.svg";
import Character2 from "assets/images/osodi_flag.svg";
import Character3 from "assets/images/osodi_cheerup.svg";
import Character4 from "assets/images/osodi_hi.svg";
import EventResultModal from "../Event/EventResultModal";

const BASE_URL = process.env.REACT_APP_API;

const today = CalcToday();

function Main() {
	const navigate = useNavigate();
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
		if (!localStorage.getItem("access_token") && eng === "my") {
			// 비로그인 시 내가 쓴 문장 확인 불가 -> 로그인 유도
			setOpenLogin(true);
		} else {
			setNowSort(eng);
			setPage(1);
		}
	}

	const Sort = ({ name, eng, mark }: SortProps) => {
		// if (mark) {
		// 	return (
		// 		<Sorted
		// 			flag={mark}
		// 			onClick={() => {
		// 				clickSort(eng);
		// 			}}
		// 		>
		// 			{name}
		// 		</Sorted>
		// 	);
		// } else {
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
		// }
	};

	// ************************ get 오늘의 구문 ************************
	type sentenceType = {
		created_at: string;
		day_of_the_week: string;
		discription: string;
		id: number;
		korean: string;
		sentence: string;
		translate: string;
	};
	const [loading, setLoading] = useState(false);
	const [sentence, setSentence] = useState<sentenceType>({
		created_at: "",
		day_of_the_week: "",
		discription: "",
		id: 0,
		korean: "",
		sentence: "",
		translate: "",
	});

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
			})
				.then((res) => {
					console.log(res.data.postList);
					setPost(res.data.postList);
					setPages(res.data.pageCnt);
				})
				.catch((e) => {});
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
		if (localStorage.getItem("access_token")) {
			await axios({
				method: "get",
				url: `${BASE_URL}/writing/post/${id}/likes/`,
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			})
				.then(() => {
					getSentences();
				})
				.catch((e) => {
					console.log(e);
					if (e.response.data.code === "token_not_valid") {
						tokenNotValid();
						window.location.reload(); // 새로고침
					}
				});
		} else {
			setOpenLogin(true);
			document.body.style.overflow = "hidden";
		}
	}

	// ************************ 오늘의 구문이 포함되어 있는지 ************************
	const [writing, setWriting] = useState<string>(""); // 작성한 문장
	const [noWarning, setNoWarning] = useState<boolean>(true);

	async function isIncluding() {
		setLoading(true);
		await axios({
			method: "post",
			url: `${BASE_URL}/writing/pattern-check/`,
			data: { text: writing, sentence: sentence.sentence },
		})
			.then(() => {
				saveSentence();
			})
			.catch((e) => {
				setNoWarning(false);
				setLoading(false);
			});
	}

	// ************************ 문장 작성 ************************
	async function saveSentence() {
		await axios({
			method: "post",
			url: `${BASE_URL}/writing/post/create/${sentence.id}/`,
			headers: {
				Authorization: localStorage.getItem("access_token")
					? `Bearer ${localStorage.getItem("access_token")}`
					: "",
			},
			data: { body: writing },
		})
			.then(() => {
				getSentences();
				getCnt();
				setNoWarning(true);
				setNowSort("latest");
				setWriting("");
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					// navigate("/");
					window.location.reload(); // 새로고침
				} else {
					// setNoWarning(false);
				}
			});
		setLoading(false);
	}

	// ************************ 로그인 모달 ************************
	const [openLogin, setOpenLogin] = useState<boolean>(false);

	// ************************ 구글 첫 로그인 시 닉네임 설정 ************************
	const flag = useOutletContext<any>();
	const [firstGoogle, setFirstGoogle] = useState<boolean>(false); // 구글 로그인 처음인지 유무
	const [nickname, setNickname] = useState<string>("");
	const [nameError, setNameError] = useState<boolean>(true); // 닉네임 에러 확인

	function setNameAndNickname() {
		axios({
			method: "post",
			url: `${BASE_URL}/accounts/make-nickname/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			data: { nickname: nickname },
		})
			.then((r) => {
				localStorage.setItem("nickname", nickname);
				localStorage.setItem("name", r.data.name);
				setFirstGoogle(false);
				// setFirst(true);
				flag[3](true);
			})
			.catch((e) => {
				// console.log(e.response.data.detail);
				setNameError(false);
			});
	}

	// ************************ 구독 신청 ************************
	const [subModal, setSubModal] = useState<boolean>(false);

	// const [first, setFirst] = useState<boolean>(false); // 최초 로그인 유무

	function clickSubYes() {
		axios({
			method: "get",
			url: `${BASE_URL}/accounts/change-sub/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then(() => {
				flag[3](false);
				localStorage.setItem("subscription", "true");
				// window.location.reload(); // 새로고침
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					// navigate("/");
					window.location.reload(); // 새로고침
				}
			});
	}

	function clickSubNo() {
		flag[3](false);
		window.location.reload(); // 새로고침
	}

	function closeSubModal() {
		setSubModal(false);
	}

	// ************************ 비로그인 유저 구독 신청 ************************
	const [subName, setSubName] = useState<string>("");
	const [subEmail, setSubEmail] = useState<string>("");

	function subAsNonUser() {
		if (subEmail.length === 0 || subName.length === 0) {
			alert("이름과 이메일을 작성해주세요.");
		} else {
			axios({
				method: "post",
				url: `${BASE_URL}/writing/subscription/create/`,
				data: { sub_email: subEmail, sub_nickname: subName },
			})
				.then((res) => {
					alert("신청되었습니다.");
					// console.log(res);
				})
				.catch((e) => {
					if (e.response.status === 400) {
						alert("이미 가입된 이메일입니다.\n로그인 후 신청해주세요.");
					}
				});
		}
	}

	// ************************ 비밀번호 찾기 ************************
	const [email, setEmail] = useState<string>("");
	const [resetPasswordModal, setResetPasswordModal] = useState<boolean>(false);
	const [resetPasswordConfirmModal, setResetPasswordConfirmModal] =
		useState<boolean>(false);

	function openResetPasswordModal() {
		setResetPasswordModal(true);
		setOpenLogin(false);
	}

	function closeResetPasswordModal() {
		setResetPasswordModal(false);
		setOpenLogin(false);
		document.body.style.overflow = "unset";
	}

	function closeResetPasswordConfirmModal() {
		setResetPasswordConfirmModal(false);
	}

	function resetPassword() {
		setResetPasswordModal(false);
		setResetPasswordConfirmModal(true);
		setLoading(true);
		axios({
			method: "post",
			url: `${BASE_URL}/password/reset/`,
			data: { email: email },
		})
			.then((res) => {
				// console.log(res);
				setResetPasswordModal(false);
				setLoading(false);
			})
			.catch((e) => {
				// console.log(e);
			});
	}

	// ************************ osod AI ************************
	const [showAI, setShowAI] = useState<boolean>(false);
	const [osodAI, setOsodAI] = useState<string>("");
	const [response, setResponse] = useState<string>("");
	const [original, setOriginal] = useState<string>("");
	const [bool, setBool] = useState<boolean>(false);

	async function clickAI() {
		await axios({
			method: "post",
			url: `${BASE_URL}/writing/grammar-check/`,
			data: {
				text: writing,
				sentence: sentence.sentence,
			},
		})
			.then((res) => {
				// console.log(res.data);
				setOsodAI(res.data.ai);
				setResponse(res.data.response);
				setOriginal(res.data.original);
				setBool(res.data.bool);
				setShowAI(true);
			})
			.catch((e) => {
				setOsodAI(e.response.data.ai);
				setResponse(e.response.data.response);
				setOriginal(e.response.data.original);
				setBool(e.response.data.bool);
				setShowAI(true);
			});
	}

	// ************************ AI 모달 창 닫기 ************************

	// const outsideRef = useRef<HTMLDialogElement | null | undefined>(null);
	const outsideRef = useRef<any>(null);
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (outsideRef.current && !outsideRef.current.contains(event.target)) {
				setShowAI(false);
				setShowTrans(false);
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [outsideRef]);

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
			setShowTrans(true);
		});
	}

	// ************************ 이벤트 페이지로 ************************
	const goEvent = () => {
		navigate("/event");
	};

	// ************************ 이벤트 팝업창 ************************
	const [eventPopup, setEventPopup] = useState<boolean>(true);
	const [hasCookie, setHasCookie] = useState<boolean>(true);
	const [appCookies, setAppCookies] = useCookies(); // 쿠키 목록 불러옴

	// 만료 시기 설정 함수
	const getExpiredDate = (days: number) => {
		const date = new Date();
		date.setDate(date.getDate() + days);
		return date;
	};

	const closeModalUntilExpires = () => {
		if (appCookies["MODAL_EXPIRES"]) return; // 쿠키에 있을 경우 return
		const expires = getExpiredDate(1);
		setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });
		setEventPopup(false);
	};

	useEffect(() => {
		if (appCookies["MODAL_EXPIRES"]) return;
		setHasCookie(false);
	}, []);

	// ************************ tooltip ************************
	const [tooltip, setTooltip] = useState<boolean>(true);
	const [hasTooltip, setHasTooltip] = useState<boolean>(true);

	const closeTooltipUntilExpires = () => {
		if (appCookies["TOOLTIP_EXPIRES"]) return; // 쿠키에 있을 경우 return
		const expires = getExpiredDate(1095);
		setAppCookies("TOOLTIP_EXPIRES", true, { path: "/", expires });
		setTooltip(false);
	};

	useEffect(() => {
		if (appCookies["TOOLTIP_EXPIRES"]) return;
		setHasTooltip(false);
	}, []);

	// // ************************ ranking report modal ************************
	// const [rankingReport, setRankReport] = useState<boolean>(false);

	// ************************ 연속 학습 랭킹 ************************
	const [rankingUser, setRankingUser] = useState<string[]>();
	const colors = ["#71EEA3", "#FFE8EB", "#FFFFFF"];
	const characters = [Character1, Character2, Character3];

	function rankingContinuos() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/accounts/rankingcontinuous/`,
		}).then((res) => {
			setRankingUser(res.data.ranking);
		});
		setLoading(false);
	}

	// ************************ 이벤트 좋아요 랭킹 ************************
	type likeRankType = [
		{
			user__nickname: string;
			total_likes: number;
		}
	];
	const [likeRankingUser, setLikeRankingUser] = useState<likeRankType>();

	const [resultModal, setResultModal] = useState<boolean>(true);

	function getLikeRanking() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/accounts/ranking/`,
		}).then((res) => {
			setLikeRankingUser(res.data.ranking);
			console.log(res);
		});
		setLoading(false);
	}

	useEffect(() => {
		rankingContinuos();
		getLikeRanking();
	}, []);

	// ************************ 모달 관련 ************************
	// 월요일 -> 이벤트 모달, 다른 요일 -> 결과 모달
	// let mToday = new Date();
	// let date = mToday.getDay();
	// const mon: boolean = date === 1 ? true : false;

	if (loading) return <Loading />;

	return (
		<Wrap>
			<DesktopAds width="1338px" style={{ float: "left", marginTop: "20rem" }}>
				{/* <GoogleAdvertise slot="2282673475" width="250px" height="500px" /> */}
				<div
					style={{
						width: "250px",
						height: "500px",
						float: "left",
						marginTop: "20rem",
					}}
				></div>
			</DesktopAds>
			<DesktopAds width="1338px" style={{ float: "right", marginTop: "20rem" }}>
				<GoogleAdvertise slot="2282673475" width="250px" height="500px" />
			</DesktopAds>
			<CenterSection>
				{/* {eventPopup && !hasCookie && (
					<EventModal
						closeModal={() => setEventPopup(false)}
						closeModalUntilExpires={closeModalUntilExpires}
					/>
				)} */}
				{resultModal && (
					<EventResultModal closeModal={() => setResultModal(false)} />
				)}
				{openLogin && (
					<Login
						openLogin={openLogin}
						setOpenLogin={setOpenLogin}
						setFirst={flag[3]}
						setGoogle={setFirstGoogle}
						openResetPasswordModal={openResetPasswordModal}
					/>
				)}
				{flag[2] && (
					<Modal
						title={"Email 구독 신청"}
						body={
							"하루 한 문장 영어 글쓰기 연습을\n메일로 받아 보길 원하시나요?"
						}
						button={"네"}
						button2={"아니요"}
						onclick={clickSubYes}
						onclick2={clickSubNo}
					/>
				)}
				{firstGoogle && (
					<Modal
						body={"닉네임을 설정해 주세요"}
						button={"확인"}
						onclick={setNameAndNickname}
						input={true}
						setState={setNickname}
						placeholder="Nickname"
						warning={nameError}
					/>
				)}
				{subModal && (
					<Modal
						body={"구독 신청이 되었습니다."}
						button={"확인"}
						onclick={closeSubModal}
					/>
				)}
				{resetPasswordModal && (
					<Modal
						body="가입하신 Email 주소를 입력해주세요"
						button="확인"
						button2="취소"
						onclick={resetPassword}
						onclick2={closeResetPasswordModal}
						input={true}
						setState={setEmail}
						placeholder="Email"
					/>
				)}
				{resetPasswordConfirmModal && (
					<Modal
						body={"가입한 이메일로 \n비밀번호를 재설정 링크를 보냈습니다"}
						button={"확인"}
						onclick={closeResetPasswordConfirmModal}
					/>
				)}
				{/* {rankingReport && <DialogBox page="modal"></DialogBox>} */}
				{/* <EventBanner onClick={goEvent}>
					<Notice>notice</Notice>
					<BannerText>
						{
							"하루 한 문장 쓰기 챌런지 !! \n영어 실력도 높이고 상품도 받으세요! \n(6/5~7/2, 4주간) 🎁"
						}
					</BannerText>
					<RigthArrow>
						<img src={RightArrow} />
					</RigthArrow>
				</EventBanner> */}
				<TodayStc>
					<DateComponent date={today} page={"main"} />
					<Text>오늘의 구문을 사용하여 영어 글쓰기를 연습해 보세요.</Text>
					<Eng>{sentence.sentence}</Eng>
					<Kor>{sentence.korean}</Kor>
					<Sentence>{sentence.discription}</Sentence>
					<SentenceKor>{sentence.translate}</SentenceKor>
				</TodayStc>
				<Writing noWarning={noWarning}>
					{showAI && (
						<div ref={outsideRef}>
							<BlueboxModal
								title={osodAI}
								subbody={!bool ? original : ""}
								body={!bool ? response : ""}
							/>
						</div>
					)}
					{showTrans && (
						<div ref={outsideRef}>
							<BlueboxModal body={trans} />
						</div>
					)}
					{tooltip && !hasTooltip && (
						<Tooltip closeTooltip={closeTooltipUntilExpires} />
					)}
					<textarea
						placeholder={sentence.sentence + " 를 사용하여 영작하기"}
						onChange={(e) => {
							setWriting(e.target.value);
						}}
						value={writing}
						maxLength={200}
					/>

					<Menu>
						<Icons>
							<img
								src={Trans}
								alt="translate"
								onClick={() => {
									clickTrans(writing);
								}}
							/>
							<AIIcon onClick={clickAI}>AI teacher</AIIcon>
							<img
								src={Copy}
								alt="copy"
								onClick={() => {
									handleCopyClipBoard(writing);
								}}
							/>
						</Icons>
						<Button onClick={isIncluding}>영작 완료</Button>
					</Menu>
					<WarningText noWarning={noWarning} page="main">
						* 오늘의 구문을 활용하여 문장을 만들어주세요!
					</WarningText>
				</Writing>
				{/* <DesktopAds width="768px" style={{ marginTop: "1rem" }}>
					<GoogleAdvertise
						slot="5506046036"
						width="728px"
						height="90px"
						margin="0 auto"
					/>
				</DesktopAds>
				<MobileAds style={{ marginTop: "1rem" }}>
					<GoogleAdvertise
						slot="1678485541"
						width="320px"
						height="50px"
						margin="0 auto"
					/>
				</MobileAds> */}
				<WritingRank>
					<Title>
						{/* <img src={Medal} /> */}
						🏅 연속 학습 랭킹
					</Title>
					<RankItems>
						{rankingUser &&
							rankingUser.map((user, idx) => (
								<RankItem backgroundColor={colors[idx]}>
									<Ranking>{idx + 1}등</Ranking>
									<NickName>{user}</NickName>
									<Character>
										<img src={characters[idx]} />
									</Character>
								</RankItem>
							))}
					</RankItems>
				</WritingRank>
				<ListContainer>
					{postcnt === 0 ? (
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
							{post.map((c: any) => (
								<Com
									key={c.id}
									id={c.unknown ? null : c.user.id}
									postId={c.id}
									name={c.unknown ? c.unknown : c.user.nickname}
									contents={c.body}
									hearts={c.like_num}
									bool_like={c.bool_like}
									time={c.time_ago}
									clickLikes={clickLikes}
									getSentences={getSentences}
								/>
							))}
							<Pagination pages={pages} page={page} setPage={setPage} />
						</>
					)}
				</ListContainer>
				{/* <EventRankingContainer>
					<EventTitle bold={true}>
						<img src={Character4} />
						Event Rank
					</EventTitle>
					<EventTitle bold={false}>
						{"이번 주 동안 좋아요를 가장 많이 받은 1등에게\n 상품권을 드려요!"}
						<img src={Character4} />
					</EventTitle>
					<EventRankingItems>
						{likeRankingUser &&
							likeRankingUser.map((user, idx) => (
								<EventRankingItem>
									<EventRanking>{idx + 1}등</EventRanking>
									<Likes>♥ {user.total_likes}</Likes>
									<EventNickName>{user.user__nickname}</EventNickName>
								</EventRankingItem>
							))}
					</EventRankingItems>
				</EventRankingContainer> */}

				{/* <DesktopAds width="768px" style={{ marginTop: "2rem" }}>
					<GoogleAdvertise
						slot="5506046036"
						width="728px"
						height="90px"
						margin="0 auto"
					/>
				</DesktopAds>
				<MobileAds style={{ marginTop: "1rem" }}>
					<GoogleAdvertise
						slot="4766599147"
						width="336px"
						height="280px"
						margin="0 auto"
					/>
				</MobileAds> */}
				<MailSection
					subscription={
						localStorage.getItem("subscription") === "true" ? true : false
					}
				>
					<MailText login={localStorage.getItem("access_token") ? true : false}>
						<TopText>
							{
								"osod의 하루 한 문장 영어 글쓰기 연습을\n메일로 받아 보길 원하시나요?"
							}
						</TopText>
						{localStorage.getItem("access_token") ? (
							""
						) : (
							<BottomText>이름과 이메일을 남겨주세요.</BottomText>
						)}
					</MailText>
					{localStorage.getItem("access_token") ? (
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
				<DesktopAds width="768px">
					<GoogleAdvertise slot="5506046036" width="728px" height="90px" />
				</DesktopAds>
				<MobileAds>
					<GoogleAdvertise slot="1678485541" width="320px" height="50px" />
				</MobileAds>
			</CenterSection>
		</Wrap>
	);
}

export default Main;
