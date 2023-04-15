import { useEffect, useRef, useState, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
	Wrap,
	LoginBut,
	Menu,
	ProfileBut,
	Menudiv,
	EventBut,
	Right,
	GiftIcon,
} from "./styled";
import Logo from "../../../assets/images/logo.svg";
import Profile from "../../../assets/icons/profile-icon.svg";
import axios from "axios";
// import { useLogout } from "apis/logout";
import { useRecoilState } from "recoil";
import { LoginState } from "states/LoginState";
// import { useMediaQuery } from "react-responsive";

const BASE_URL = process.env.REACT_APP_API;

export function Dropdown() {
	// const isMobile = useMediaQuery({
	// 	maxDeviceWidth: 768,
	// 	// query: "(max-width:768px)",
	// });

	// ************************ navigation ************************
	const navigate = useNavigate();
	const goSentences = () => {
		navigate("/sentence");
	};
	const gohearts = () => {
		navigate("/heart");
	};
	const changePassword = () => {
		navigate("/password");
	};

	// // ************************ Logout ************************
	function clickLogout() {
		axios({
			method: "post",
			url: `${BASE_URL}/logout/`,
			data: {
				refresh: localStorage.getItem("refresh_token"),
			},
		}).then((res) => {
			localStorage.clear();
			// setLogin(false);
			alert(res.data.detail);
			navigate("/");
			window.location.reload(); // 새로고침
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
			<Menudiv mark={"menu"} onClick={changePassword}>
				비밀번호 변경
			</Menudiv>
			<Menudiv
				mark={"logout"}
				onClick={() => {
					// useLogout(setLogin);
					clickLogout();
				}}
			>
				로그아웃
			</Menudiv>
		</Menu>
	);
}

function Header() {
	const [view, setView] = useState<boolean>(false); // dropdown
	const [openLogin, setOpenLogin] = useState<boolean>(false); // login modal

	// ************************ navigation ************************
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
		window.location.reload(); // 새로고침
	};
	const goEvent = () => {
		navigate("/event");
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
				<Right>
					<EventBut onClick={goEvent}>
						<GiftIcon>🎁</GiftIcon>EVENT
					</EventBut>
					{localStorage.getItem("access_token") ? (
						<>
							<ProfileBut
								ref={outsideRef}
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
				</Right>
			</Wrap>
			<Outlet context={[openLogin, setOpenLogin]} />
		</>
	);
}

export default Header;
