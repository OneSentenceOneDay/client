import FooterComponent from "./Footer";
import GoogleAdvertise from "./GoogleAdvertise";
import {
	Wrap,
	LoadingItem,
	DesktopAds,
	MobileAds,
	OsodiImg,
	InnerWrap,
} from "./styled";
import Osodi from "assets/images/osodi.gif";

function Loading() {
	return (
		<Wrap>
			<InnerWrap>
				<OsodiImg>
					<img src={Osodi} />
				</OsodiImg>
				<LoadingItem>잠시만 기다려주세요</LoadingItem>
			</InnerWrap>

			<FooterComponent />
			<DesktopAds width="768px">
				<GoogleAdvertise slot="5506046036" width="728px" height="90px" />
			</DesktopAds>
			<MobileAds>
				<GoogleAdvertise slot="1678485541" width="320px" height="50px" />
			</MobileAds>
		</Wrap>
	);
}

export default Loading;
