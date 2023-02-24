import { useEffect, useRef, useState, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Wrap, LoginBut, Menu, ProfileBut, Menudiv } from "./styled";
import Logo from "../../../assets/images/logo.svg";
import Profile from "../../../assets/icons/profile-icon.svg";

export function Dropdown() {
	const navigate = useNavigate();
	const goSentences = () => {
		navigate("/sentence");
	};
	const gohearts = () => {
		navigate("/heart");
	};
	return (
		<Menu>
			<Menudiv mark={"name"}>손흥민</Menudiv>
			<Menudiv mark={"menu"} onClick={goSentences}>
				내가 쓴 문장
			</Menudiv>
			<Menudiv mark={"menu"} onClick={gohearts}>
				♡ 모아보기
			</Menudiv>
			<Menudiv mark={"menu"}>비밀번호 변경</Menudiv>
			<Menudiv mark={"logout"}>로그아웃</Menudiv>
		</Menu>
	);
}

function Header() {
	const [login, setLogin] = useState<boolean>(false);
	const [view, setView] = useState<boolean>(false); // dropdown
	const [openLogin, setOpenLogin] = useState<boolean>(false); // login modal

	// ************ navigation ************
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};

	// ************ open login modal ************
	const onClickToggleModal = useCallback(() => {
		setOpenLogin(!openLogin);
	}, [openLogin]);

	// ************ close dropdown ************
	const outsideRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (outsideRef.current && !outsideRef.current.contains(event.target)) {
				setView(false);
				// setOpenLogin(false);
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [outsideRef]);

	return (
		<>
			<Wrap ref={outsideRef}>
				<img src={Logo} onClick={goHome} />
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
					<LoginBut onClick={onClickToggleModal}>로그인</LoginBut>
				)}
			</Wrap>
			<Outlet context={[openLogin, setOpenLogin]} />
		</>
	);
}

export default Header;
