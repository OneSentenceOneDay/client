import { useEffect, useRef, useState, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Wrap, LoginBut, Menu, ProfileBut, Menudiv } from "./styled";
import Logo from "../../../assets/images/logo.svg";
import Profile from "../../../assets/icons/profile-icon.svg";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

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
			url: `${BASE_URL}/logout/`,
			data: {
				refresh: sessionStorage.getItem("refresh_token"),
			},
		}).then((res) => {
			sessionStorage.clear();
			setLogin(false);
			alert(res.data.detail);
			navigate("/");
			window.location.reload(); // 새로고침
		});
	}

	return (
		<Menu>
			<Menudiv mark={"name"}>{sessionStorage.getItem("nickname")}</Menudiv>
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
		sessionStorage.getItem("access_token")
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
			<Wrap>
				<img src={Logo} onClick={goHome} />
				{login ? (
					<>
						<ProfileBut
							ref={outsideRef}
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
