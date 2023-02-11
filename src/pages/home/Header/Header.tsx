import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Wrap, LoginBut, Menu, ProfileBut, Menudiv } from "./styled";
import Logo from "../../../assets/images/logo.svg";
import Profile from "../../../assets/icons/profile-icon.svg";

export function Dropdown() {
	return (
		<Menu>
			<Menudiv mark={"name"}>손흥민</Menudiv>
			<Menudiv mark={"menu"}>내가 쓴 문장</Menudiv>
			<Menudiv mark={"menu"}>♡ 모아보기</Menudiv>
			<Menudiv mark={"menu"}>비밀번호 변경</Menudiv>
			<Menudiv mark={"logout"}>로그아웃</Menudiv>
		</Menu>
	);
}

function Header() {
	const [login, setLogin] = useState(true);
	const [view, setView] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const clickOutside = (e: any) => {
		if (ref.current !== null && !ref.current.contains(e.target)) {
			setView(!view);
		}
	};

	useEffect(() => {
		if (view) {
			window.addEventListener("click", clickOutside);
		}
		return () => {
			window.removeEventListener("click", clickOutside);
		};
	}, [view]);

	return (
		<>
			<Wrap>
				<img src={Logo} />
				{login ? (
					<>
						<ProfileBut
							onClick={() => {
								setView(!view);
							}}
						>
							<img src={Profile} />
							{view && <Dropdown />}
						</ProfileBut>
					</>
				) : (
					<LoginBut>로그인</LoginBut>
				)}
			</Wrap>
			<Outlet />
		</>
	);
}

export default Header;
