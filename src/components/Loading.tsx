import FooterComponent from "./Footer";
import GoogleAdvertise from "./GoogleAdvertise";
import { Wrap, LoadingItem, DesktopAds, MobileAds } from "./styled";

function Loading() {
	return (
		<Wrap>
			<LoadingItem>로딩 중 ...</LoadingItem>
			<FooterComponent />
			<DesktopAds>
				<GoogleAdvertise slot="5506046036" width="728px" height="90px" />
			</DesktopAds>
			<MobileAds>
				<GoogleAdvertise slot="1678485541" width="320px" height="50px" />
			</MobileAds>
		</Wrap>
	);
}

export default Loading;
