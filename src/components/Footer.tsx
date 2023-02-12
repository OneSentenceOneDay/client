import { Footer, Member, Copyright } from "./styled";

function FooterComponent() {
	return (
		<Footer>
			<Member flag={true}>
				{"서비스기획/디자인: 김경화\nbrilliantkkh@naver.com"}
			</Member>
			<Member flag={true}>{"프론트엔드개발: 엄소현\nsohy19@hufs.ac.kr"}</Member>
			<Member flag={false}>{"백엔드개발: 이현제\n201802977@hufs.ac.kr"}</Member>
			<Copyright>Copyright © osod All Rights Reserved. Prod By. SWYG</Copyright>
		</Footer>
	);
}

export default FooterComponent;
