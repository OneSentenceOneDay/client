import FooterComponent from "./Footer";
import { Wrap, LoadingItem } from "./styled";

function Loading() {
	return (
		<Wrap>
			<LoadingItem>로딩 중 ...</LoadingItem>
			<FooterComponent />
		</Wrap>
	);
}

export default Loading;
