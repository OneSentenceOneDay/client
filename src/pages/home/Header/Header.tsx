import { Outlet } from "react-router-dom";
import { Wrap, LoginBut } from "./styled";
import Logo from "../../../assets/images/logo.svg";

function Header() {
	return (
		<>
			<Wrap>
				<img src={Logo} />
				<LoginBut>로그인</LoginBut>
			</Wrap>
			<Outlet />
		</>
	);
}

export default Header;
