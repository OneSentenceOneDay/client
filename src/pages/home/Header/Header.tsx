import { Outlet } from "react-router-dom";
import { Wrap } from "./styled";
import Logo from "../../../assets/images/logo.svg";

function Header() {
	return (
		<>
			<Wrap>
				<img src={Logo} />
			</Wrap>
			<Outlet />
		</>
	);
}

export default Header;
