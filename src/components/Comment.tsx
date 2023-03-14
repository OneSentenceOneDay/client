import {
	Comment,
	Name,
	Contents,
	Num,
	HeartDiv,
	Right,
	BottomDiv,
} from "./styled";
import Trans from "./../assets/icons/trans-icon.svg";
import Heart from "./../assets/icons/heart-icon.svg";
import ColorHeart from "./../assets/icons/color-heart-icon.svg";
import Edit from "./../assets/icons/edit-icon.svg";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { DialogBox } from "pages/auth/Login/styled";
import { Modal } from "./Modal";
import BlueboxModal from "./BlueboxModal";

const BASE_URL = process.env.REACT_APP_API;

type commetType = {
	id: number | null;
	postId: number;
	name: string;
	contents: string;
	hearts: number;
	bool_like: boolean;
	clickLikes: (id: number) => void;
	// clickTrans: (body: string) => void;
};

export default function Com({
	id,
	postId,
	name,
	contents,
	hearts,
	bool_like,
	clickLikes,
	getSentences,
}: // showTrans,
// clickTrans,
any) {
	const userId: string | null = sessionStorage.getItem("id");

	// ************************ 번역 ************************
	const [trans, setTrans] = useState<string>("");
	const [showTrans, setShowTrans] = useState<boolean>(false);

	async function clickTrans(body: string) {
		await axios({
			method: "post",
			url: `${BASE_URL}/writing/translate/`,
			data: {
				text: body,
			},
		}).then((res) => {
			setTrans(res.data.translation);
			setShowTrans(true);
		});
	}

	// ************************ 번역 모달 창 닫기 ************************

	// const outsideRef = useRef<HTMLDialogElement | null | undefined>(null);
	const outsideRef = useRef<any>(null);
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (outsideRef.current && !outsideRef.current.contains(event.target)) {
				setShowTrans(false);
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [outsideRef]);

	// ************************ 수정 ************************
	const [editModal, setEditModal] = useState<boolean>(false);
	const [editConts, setEditConts] = useState<string>("");

	function edit() {
		axios({
			method: "put",
			url: `${BASE_URL}/writing/post/${postId}/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
			data: {
				body: editConts,
			},
		}).then((res) => {
			console.log(res);
			setEditModal(false);
			getSentences();
		});
	}

	function undo() {
		setEditModal(false);
	}

	return (
		<>
			{editModal && (
				<Modal
					title="Edit"
					body="오늘의 구문을 사용해주세요"
					button="확인"
					button2="취소"
					onclick={edit}
					onclick2={undo}
					input={true}
					placeholder=""
					setState={setEditConts}
				/>
			)}
			{showTrans && (
				<div ref={outsideRef}>
					<BlueboxModal body={trans} />
				</div>
			)}
			<Comment>
				<Name>{name}</Name>
				<Right>
					<Contents>{contents}</Contents>
					<BottomDiv>
						{userId
							? id?.toString() === userId && (
									<img
										src={Edit}
										alt="edit"
										onClick={() => {
											setEditModal(true);
										}}
									/>
							  )
							: ""}
						<img
							src={Trans}
							alt="translate"
							onClick={() => {
								clickTrans(contents);
							}}
						/>
						<HeartDiv>
							{bool_like ? (
								<img
									src={ColorHeart}
									alt="heart"
									onClick={() => clickLikes(postId)}
								/>
							) : (
								<img
									src={Heart}
									alt="heart"
									onClick={() => clickLikes(postId)}
								/>
							)}

							<Num>{hearts}</Num>
						</HeartDiv>
					</BottomDiv>
				</Right>
			</Comment>
		</>
	);
}
