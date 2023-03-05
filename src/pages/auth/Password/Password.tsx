import { Input } from "../Login/styled";
import { Wrap } from "../../../components/styled";
import { Text, Button } from "./styled";
import FooterComponent from "components/Footer";

function Password() {
	return (
		<Wrap>
			<Text>비밀번호 변경</Text>
			<Input noWarning={true} page={"password"}>
				<input type="password" placeholder="Old Password" />
			</Input>
			<Input noWarning={true} page={"password"}>
				<input type="password" placeholder="New Password" />
			</Input>
			<Input noWarning={true} page={"password"}>
				<input type="password" placeholder="Confirm New Password" />
			</Input>
			<Button>새 비밀번호로 변경</Button>
			<FooterComponent />
		</Wrap>
	);
}

export default Password;
