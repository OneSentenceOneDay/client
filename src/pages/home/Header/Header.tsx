import { useEffect, useRef, useState, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Wrap, LoginBut, Menu, ProfileBut, Menudiv } from "./styled";
import Logo from "../../../assets/images/logo.svg";
import Profile from "../../../assets/icons/profile-icon.svg";
import axios from "axios";

export function Dropdown({ setLogin }: any) {
	// ************************ navigation ************************
	const navigate = useNavigate();
	const goSentences = () => {
		navigate("/sentence");
	};
	const gohearts = () => {
		navigate("/heart");
	};

	// ************************ Logout ************************
	function clickLogout() {
		axios({
			method: "post",
			url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app/logout/`,
			data: {
				refresh: localStorage.getItem("refresh_token"),
			},
		}).then((res) => {
			localStorage.clear();
			setLogin(false);
			alert(res.data.detail);
			navigate("/");
		});
	}

	return (
		<Menu>
			<Menudiv mark={"name"}>{localStorage.getItem("nickname")}</Menudiv>
			<Menudiv mark={"menu"} onClick={goSentences}>
				내가 쓴 문장
			</Menudiv>
			<Menudiv mark={"menu"} onClick={gohearts}>
				♡ 모아보기
			</Menudiv>
			<Menudiv mark={"menu"}>비밀번호 변경</Menudiv>
			<Menudiv mark={"logout"} onClick={clickLogout}>
				로그아웃
			</Menudiv>
		</Menu>
	);
}

function Header() {
	const [login, setLogin] = useState<boolean | string | null>(
		localStorage.getItem("access_token")
	);
	const [view, setView] = useState<boolean>(false); // dropdown
	const [openLogin, setOpenLogin] = useState<boolean>(false); // login modal

	// ************************ navigation ************************
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};

	// ************************ open login modal ************************
	const onClickToggleModal = () => {
		setOpenLogin(!openLogin);
		document.body.style.overflow = "hidden";
	};

	// ************************ close dropdown ************************
	const outsideRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (outsideRef.current && !outsideRef.current.contains(event.target)) {
				setView(false);
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
							{view && <Dropdown setLogin={setLogin} />}
						</ProfileBut>
					</>
				) : (
					<LoginBut onClick={onClickToggleModal}>로그인</LoginBut>
				)}
			</Wrap>
			<Outlet context={[openLogin, setOpenLogin, setLogin]} />
		</>
	);
}

export default Header;
