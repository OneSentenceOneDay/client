import { Footer, Member, Copyright, Img, Laws, Law } from "./styled";
import Logo from "assets/images/logo.svg";
import SubLogo from "assets/images/sub-logo.svg";
import { useNavigate } from "react-router-dom";

function FooterComponent() {
	const navigate = useNavigate();
	function goTermsOfUse() {
		navigate("/termsofuse");
		window.location.reload(); // 새로고침
	}
	function goPrivacy() {
		navigate("/privacy");
		window.location.reload(); // 새로고침
	}
	return (
		<Footer>
			<Img>
				<img src={Logo} width="75rem" />
				<img src={SubLogo} />
			</Img>

			<Member flag={true}>
				{"서비스기획/디자인: 김경화\nbrilliantkkh@naver.com"}
			</Member>
			<Member flag={true}>{"프론트엔드개발: 엄소현\nsohy19@hufs.ac.kr"}</Member>
			<Member flag={false}>{"백엔드개발: 이현제\n201802977@hufs.ac.kr"}</Member>
			<Laws>
				<Law onClick={goPrivacy}>개인정보처리방침</Law>
				<Law onClick={goTermsOfUse}>이용약관</Law>
			</Laws>
			<Copyright>Copyright © osod All Rights Reserved. Prod By. SWYG</Copyright>
		</Footer>
	);
}

export default FooterComponent;
