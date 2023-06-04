import styled from "styled-components";
import palette from "../../../lib/palette";

export const TodayStc = styled.div`
	padding-top: 2rem;
`;

export const Text = styled.div`
	font-size: 1.125rem;
	margin-top: 1rem;
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

export const Eng = styled.div`
	font-size: 2.25rem;
	margin-top: 2rem;
	font-family: Pretendard-Bolder;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 1.75rem;
	}
`;

export const Kor = styled.div`
	margin-top: 0.7rem;
	font-family: Pretendard-Light;
	color: ${palette.gray1};
	font-size: 1rem;
	@media only screen and (max-width: 768px) {
		margin-top: 0.5rem;
		font-size: 0.875rem;
	}
`;

export const Sentence = styled.div`
	margin-top: 1.5rem;
	font-size: 1.125rem;
	font-family: times-new-roman;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 20.5rem;
		justify-content: center;
		margin: 0 auto;
		padding-top: 1rem;
	}
`;

export const SentenceKor = styled.div`
	color: ${palette.gray1};
	font-family: Pretendard-Light;
	font-size: 0.9rem;
	padding-top: 0.7rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		width: 20.5rem;
		justify-content: center;
		margin: 0 auto;
		padding-top: 0.5rem;
	}
`;

export const Writing = styled.div<{ noWarning: boolean | null }>`
	margin-top: 2rem;
	textarea {
		width: 49.75rem;
		height: 10rem;
		padding: 1rem 1.25rem;
		border-radius: 0.625rem 0.625rem 0rem 0rem;
		border: 0.063rem solid
			${(props) => (props.noWarning === false ? palette.red1 : palette.gray4)};
		resize: none;
		font-size: 1.125rem;
		font-family: Pretendard-Regular;
		::placeholder {
			color: ${palette.gray4};
		}
		@media only screen and (max-width: 768px) {
			width: 18rem;
			height: 7rem;
			font-size: 0.9rem;
		}
	}
`;

export const Menu = styled.div`
	margin: 0 auto;
	width: 52.25rem;
	height: 3.75rem;
	border-radius: 0rem 0rem 0.625rem 0.625rem;
	border: 0.063rem solid ${palette.gray4};
	margin-top: -0.4rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		height: 3.5rem;
	}
`;

export const Icons = styled.div`
	background-color: #ffffff;
	border-radius: 0rem 0rem 0rem 0.625rem;
	width: 36rem;
	height: 3.25rem;
	padding-top: 0.5rem;
	line-height: 3.25rem;
	text-align: left;
	float: left;
	img {
		margin-top: 0.3rem;
		padding: 0.5rem;
		margin-left: 0.9rem;
		border-radius: 0.625rem;
		&:hover {
			cursor: pointer;
			background-color: ${palette.blue1};
		}
	}
	@media only screen and (max-width: 768px) {
		width: 12.5rem;
		height: 3rem;
		img {
			margin-left: 0.2rem;
			width: 1rem;
		}
	}
`;

export const AIIcon = styled.div`
	background-color: ${palette.blue8};
	color: #ffffff;
	font-family: Pretendard-Bold;
	float: left;
	// width: 6.1rem;
	padding: 0rem 0.7rem;
	height: 2.1rem;
	line-height: 2.1rem;
	margin-top: 0.3rem;
	text-align: center;
	border-radius: 0.5rem;
	margin-left: 1.5rem;
	border: none;
	&:hover {
		cursor: pointer;
		background-color: ${palette.blue6};
	}
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
		margin-right: 0.2rem;
		font-size: 0.8rem;
		height: 2rem;
	}
`;

export const Button = styled.div`
	width: 16.25rem;
	height: 3.75rem;
	line-height: 3.75rem;
	color: #ffffff;
	font-size: 1.125rem;
	background-color: ${palette.blue3};
	font-family: Pretendard-Bold;
	border-radius: 0rem 0rem 0.625rem 0rem;
	float: left;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	@media only screen and (max-width: 768px) {
		width: 8rem;
		height: 3.5rem;
		font-size: 1rem;
	}
`;

export const ListContainer = styled.div`
	width: 52.75rem;
	margin: 0 auto;
	padding-top: 2rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		padding-top: 1rem;
	}
`;

export const WarningText = styled.div<{
	noWarning: boolean | null;
	page: string;
}>`
	width: ${(props) => (props.page === "main" ? "52.75rem" : "25rem")};
	margin: ${(props) => (props.page === "login" ? "" : "0 auto")};
	text-align: left;
	padding-top: 0.5rem;
	font-family: Pretendard-Light;
	color: ${palette.red1};
	font-size: 0.75rem;
	display: ${(props) => (props.noWarning === false ? "" : "none")};
	@media only screen and (max-width: 768px) {
		width: ${(props) => (props.page === "main" ? "20.5rem" : "17.5rem")};
	}
`;
export const WritingRank = styled.div`
	// background-color: red;
	width: 52.75rem;
	margin: 0 auto;
	padding: 1.5rem 0rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
	}
`;

export const RankItems = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.5rem;
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export const RankItem = styled.div<{ backgroundColor: string }>`
	width: 15rem;
	// height: 6.375rem;
	border: 0.063rem solid ${palette.gray4};
	border-radius: 0.625rem;
	padding: 1.25rem 0rem 0rem 1.25rem;
	background-color: ${(props) => props.backgroundColor};
	@media only screen and (max-width: 768px) {
		width: 20.4rem;
		// height: 3.25rem;
		padding: 0.5rem 0rem;
		margin-top: 0.5rem;
	}
`;

export const Ranking = styled.div`
	border: 0.063rem solid ${palette.blue2};
	color: ${palette.blue2};
	background: #ffffff;
	font-family: Pretendard-Bolder;
	width: 2.438rem;
	padding: 0.4rem 0rem;
	border-radius: 62.438rem;
	font-size: 0.875rem;
	@media only screen and (max-width: 768px) {
		display: inline-block;
	}
`;

export const NickName = styled.div`
	text-align: left;
	font-family: Pretendard-Bolder;
	font-size: 1rem;
	width: 9.5rem;
	// background-color: yellow;
	display: inline-block;
	@media only screen and (max-width: 768px) {
		margin-left: 0.7rem;
		width: 11.5rem;
		font-family: Pretendard-Bold;
		font-size: 0.875rem;
	}
`;

export const Character = styled.div`
	width: 5rem;
	height: 4rem;
	display: inline-block;
	vertical-align: middle;
	img {
		width: 5rem;
		height: 4rem;
	}

	@media only screen and (max-width: 768px) {
		width: 3rem;
		height: 2rem;
		margin-left: 0.5rem;
		img {
			width: 3rem;
			height: 2rem;
		}
	}
`;

export const NoSentences = styled.div`
	padding: 5rem 0rem;
`;

export const NoSentencesText = styled.div`
	font-family: Pretendard-Light;
	color: ${palette.gray1};
	margin-top: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export const Cnt = styled.div`
	color: ${palette.blue2};
	font-family: Pretendard-Medium;

	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const Title = styled(Cnt)`
	text-align: left;
	img {
		vertical-align: middle;
		width: 2rem;
	}
	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const MedalImg = styled.div`
	display: inline-block;
`;

export const Sorted = styled.div<{ flag: boolean }>`
	color: ${(props) => (props.flag ? palette.blue2 : palette.blue4)};
	font-family: ${(props) =>
		props.flag ? "Pretendard-Bold" : "Pretendard-Regular"};
	&:hover {
		cursor: pointer;
		color: ${(props) => (props.flag ? palette.blue2 : palette.blue5)};
	}
	@media only screen and (max-width: 768px) {
		font-size: 0.15rem;
		margin-top: 1rem;
	}
`;

export const SortMenu = styled.div`
	text-align: right;
	div {
		display: inline-block;
		font-size: 1rem;
		margin-right: 1rem;
	}
	@media only screen and (max-width: 768px) {
		text-align: center;
		div {
			font-size: 0.8rem;
			margin-right: 0.5rem;
		}
	}
`;

export const MailSection = styled.div<{ subscription: boolean }>`
	padding-top: 2rem;
	width: 52.75rem;
	margin: 0 auto;
	display: ${(props) => (props.subscription ? "none" : "")};
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		padding-top: 1rem;
	}
`;

export const MailText = styled.div<{ login: boolean }>`
	display: inline-block;
	text-align: left;
	width: 26.125rem;
	float: ${(props) => (props.login ? "left" : "")};
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
	}
`;

export const MailInput = styled.div`
	display: inline-block;
	vertical-align: top;
	width: 26.125rem;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		margin-top: 1rem;
		text-align: left;
	}
`;

export const TopText = styled.div`
	white-space: pre-line;
	font-family: Pretendard-Bold;
	font-size: 1.5rem;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const BottomText = styled.div`
	font-family: Pretendard-Regular;
	font-size: 1.25rem;
	margin-top: 1.65rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.95rem;
		margin-top: 0.7rem;
	}
`;

export const InputSec = styled.div`
	display: inline-block;
`;

export const InputDiv = styled.div<{ position: string }>`
	input {
		&: focus {
			outline: none;
		}
		font-size: 0.8rem;
		width: 18rem;
		height: 1.3rem;
		padding: 1rem 1.25rem;
		border-radius: ${(props) =>
			props.position === "up"
				? "0.625rem 0rem 0rem 0rem"
				: "0rem 0rem 0rem 0.625rem"};
		border: 0.063rem solid ${palette.gray4};
		margin-top: ${(props) => (props.position === "up" ? "" : "-0.1rem")};
		font-family: Pretendard-Regular;
	}
	input::placeholder {
		color: ${palette.gray4};
	}
	@media only screen and (max-width: 768px) {
		input {
			padding: 0.9rem 1.25rem;
			width: 12rem;
		}
	}
`;

export const InputBut = styled.div<{ login: boolean }>`
	background-color: ${palette.blue2};
	display: inline-block;
	vertical-align: top;
	width: ${(props) => (props.login ? "14.063rem" : "5.063rem")};
	padding: ${(props) => (props.login ? "1.5rem 0;" : "2.8rem 0;")};
	font-family: Pretendard-Bold;
	color: #ffffff;
	font-size: 1rem;
	border-radius: ${(props) =>
		props.login
			? "0.625rem 0.625rem 0.625rem 0.625rem"
			: "0rem 0.625rem 0.625rem 0rem"};
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	float: ${(props) => (props.login ? "right" : "")};
	@media only screen and (max-width: 768px) {
		text-align: center;
		width: ${(props) => (props.login ? "20.5rem" : "5rem")};
		padding: ${(props) => (props.login ? "1rem 0" : "2.6rem 0")};
		margin-top: ${(props) => (props.login ? "1rem" : "")};
	}
`;

export const CenterSection = styled.div`
	margin: 0 auto;
	padding-top: 1rem;
	@media only screen and (max-width: 768px) {
		padding-top: 0rem;
	}
`;

export const EventBanner = styled.div`
	background-color: ${palette.blue2};
	padding: 0.875rem 1.25rem;
	width: 49.75rem;
	margin: 0 auto;
	border-radius: 0.625rem;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	@media only screen and (max-width: 768px) {
		width: auto;
		border-radius: 0rem;
		font-size: 0.938rem;
	}
`;

export const Notice = styled.div`
	display: inline-block;
	font-family: Pretendard-Bolder;
	background-color: ${palette.blue8};
	color: #ffffff;
	padding: 0.325rem 0.725rem;
	border-radius: 62.438rem;
	@media only screen and (max-width: 768px) {
		padding: 0rem 0.625rem;
		height: 2rem;
		line-height: 2rem;
		margin: auto 0;
	}
`;

export const BannerText = styled.div`
	display: inline-block;
	width: 42rem;
	text-align: left;
	color: #ffffff;
	font-family: Pretendard-Medium;
	// background-color: red;
	margin: auto 0;
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
		white-space: pre-line;
		padding-top: 0rem;
		vertical-align: middle;
	}
`;

export const RigthArrow = styled.div`
	display: inline-block;
	padding: 0.425rem 0.455rem 0.225rem 0.455rem;
	background-color: #ffffff;
	border-radius: 62.438rem;
	color: ${palette.blue2};
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

export const EventRankingContainer = styled.div`
	background-color: #e9dffa;
	width: 50.25rem;
	// height: 18.125rem;
	padding: 0.5rem 1.25rem 1.25rem 1.25rem;
	margin: 2rem auto;
	border: 0.063rem solid ${palette.gray4};
	border-radius: 0.625rem;
	text-align: left;
	@media only screen and (max-width: 768px) {
		width: 18.5rem;
		text-align: center;
	}
`;
export const EventTitle = styled.div<{ bold: boolean }>`
	font-size: 1.125rem;
	font-family: ${(props) =>
		props.bold ? "Pretendard-Bolder" : " retendard-Regular"};
	display: inline-block;
	margin-right: 0.5rem;
	margin-top: 1rem;
	margin-left: 0.5rem;
	color: ${palette.blue8};
	img {
		display: ${(props) => (props.bold ? "none" : "")};
		vertical-align: middle;
		width: 3.5rem;
		// background-color: red;
		margin-left: 0.5rem;
	}
	@media only screen and (max-width: 768px) {
		white-space: pre-line;
		font-size: ${(props) => (props.bold ? "1.125rem" : " 0.875rem")};
		img {
			display: ${(props) => (props.bold ? "block" : "none")};
			margin: 0 auto;
			width: 3rem;
			padding-bottom: 0.5rem;
		}
	}
`;
export const EventRankingItems = styled.div`
	// background-color: red;
	// margin-top: 1.5rem;
	@media only screen and (max-width: 768px) {
		text-align: left;
	}
`;

export const EventRankingItem = styled.div`
	background-color: #ffffff;
	border-radius: 0.625rem;
	padding: 0.625rem;
	margin-top: 1rem;
`;

export const Likes = styled.div`
	display: inline-block;
	border: 0.063rem solid ${palette.blue8};
	color: ${palette.blue8};
	background: #ffffff;
	font-family: Pretendard-Bolder;
	width: 4rem;
	padding: 0.5rem 0rem;
	border-radius: 62.438rem;
	font-size: 1.125rem;
	text-align: center;
	margin-left: 0.7rem;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
		width: 3.5rem;
		padding: 0.4rem 0rem;
		margin-left: 0.5rem;
	}
`;

export const EventRanking = styled(Ranking)`
	display: inline-block;
	text-align: center;
`;

export const EventNickName = styled.div`
	font-family: Pretendard-Bolder;
	color: ${palette.blue8};
	font-size: 1.125rem;
	display: inline-block;
	margin-left: 0.7rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.875rem;
		margin-left: 0.5rem;
	}
`;
