import { Wrap } from "components/styled";
import {
	Inner,
	EventIcon,
	Text1,
	Text2,
	Text3,
	WhiteBox,
	Text4,
	Text5,
	PinkBox,
	Title,
	Item,
	Texts,
	Text6,
	BlueBox,
	Text7,
	FeedbackBut,
} from "./styled";
import Gift from "assets/images/gift-image.svg";
import Munsang1 from "assets/images/munsang5000.svg";
import Munsang2 from "assets/images/munsang30000.svg";
import Computer from "assets/images/computer.svg";
import Calendar from "assets/images/calendar.svg";
import FooterComponent from "components/Footer";

function Event() {
	return (
		<Wrap>
			<Inner>
				<EventIcon>EVENT</EventIcon>
				<Text1>하루 한 문장 영작 챌런지!</Text1>
				<Text2>osod 출시 기념 이벤트</Text2>
				<Text3 flag={false}>
					{
						"안녕하세요?\n하루 한 문장으로 영어 학습을 할 수 있는\n‘osod(one sentence one day)’입니다!\n\n매일 새로운 구문으로"
					}
				</Text3>
				<Text3 flag={true}>
					한 달 동안 열심히 영작하고 상품도 받으세요! 🙌
				</Text3>
				<WhiteBox>
					<img src={Gift} />
					<Text4>event.01</Text4>
					<Text5>매주 4일 이상 연속 학습하고 문화상품권 5천 원 받으세요!</Text5>
					<img src={Munsang1} />
					<Text4>event.02</Text4>
					<Text5>가장 많이 좋아요 받고 문화상품권 3만 원 받으세요!</Text5>
					<img src={Munsang2} />
				</WhiteBox>
				<PinkBox>
					<Title>참여 방법</Title>
					<Item>
						<img src={Computer} />
						<Texts>
							<Text6 flag={true}>로그인하고 연속 학습 출석하기!</Text6>
							<Text6 flag={false}>
								4일 이상 출석한 학습자를 대상으로 추첨!
							</Text6>
						</Texts>
					</Item>
					<Item>
						<img src={Calendar} />
						<Texts>
							<Text6 flag={true}>5월 한 달간 매일 영작하기!</Text6>
							<Text6 flag={false}>2023년 5월 1일부터 5월 28일까지</Text6>
						</Texts>
					</Item>
				</PinkBox>
				<BlueBox>
					<Text7 flag={true}>👩🏻‍💻</Text7>
					<Text7 flag={false}>
						{
							"osod에서 영어 학습을 하면서 느낀\n좋은 점 또는 불편한 점을 피드백으로 보내주세요.\n더욱 도움이 되는 영어 작문 학습 사이트 만들어 볼게요!"
						}
					</Text7>
					<FeedbackBut>피드백 보내기</FeedbackBut>
				</BlueBox>
				<FooterComponent />
			</Inner>
		</Wrap>
	);
}

export default Event;
