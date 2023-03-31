import styled from "styled-components";
import palette from "lib/palette";
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
				<LogoImg>
					<img src={Logo} />
				</LogoImg>
				<SubLogoImg>
					<img src={SubLogo} />
				</SubLogoImg>
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

export const Footer = styled.div`
	width: 52.75rem;
	padding-top: 10rem;
	text-align: right;
	margin: 0 auto;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		font-size: 0.15rem;
		padding-top: 7rem;
	}
`;

export const Img = styled.div`
	float: left;
	img {
		display: block;
	}
`;

export const LogoImg = styled.div`
	img {
		width: 5.5rem;
		@media only screen and (max-width: 768px) {
			width: 3.8rem;
		}
	}
`;

export const SubLogoImg = styled.div`
	img {
		width: 11rem;
		@media only screen and (max-width: 768px) {
			width: 6.25rem;
		}
	}
`;

export const Laws = styled.div`
	margin-top: 0.5rem;
`;

export const Law = styled.div`
	display: inline-block;
	margin-left: 1rem;
	color: ${palette.blue2};
	font-family: Pretendard-Light;
	font-size: 0.563rem;
	cursor: pointer;
`;

export const Member = styled.div<{ flag: boolean }>`
	white-space: pre-line;
	display: inline-block;
	color: ${palette.blue2};
	font-family: Pretendard-Light;
	font-size: 0.563rem;
	text-align: right;
	padding-left: 1rem;
	padding-right: ${(props) => (props.flag ? "1rem" : "")};
	border-right: ${(props) =>
		props.flag ? `0.063rem solid ${palette.blue2}` : ""};
	@media only screen and (max-width: 768px) {
		display: block;
		padding-right: 0rem;
		border-right: none;
		margin-top: 0.5rem;
	}
`;
export const Copyright = styled.div`
	font-family: Pretendard-Light;
	font-size: 0.563rem;
	color: ${palette.blue2};
	margin-top: 0.5rem;
	padding-bottom: 2rem;
`;
