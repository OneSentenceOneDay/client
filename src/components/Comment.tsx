import Trans from "./../assets/icons/trans-icon.svg";
import Heart from "./../assets/icons/heart-icon.svg";
import ColorHeart from "./../assets/icons/color-heart-icon.svg";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import BlueboxModal from "./BlueboxModal";
import styled from "styled-components";
import palette from "lib/palette";

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
	time,
	clickLikes,
	getSentences,
}: // showTrans,
// clickTrans,
any) {
	const userId: string | null = localStorage.getItem("id");

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
	// const [editModal, setEditModal] = useState<boolean>(false);
	// const [editConts, setEditConts] = useState<string>("");

	// function edit() {
	// 	axios({
	// 		method: "put",
	// 		url: `${BASE_URL}/writing/post/${postId}/`,
	// 		headers: {
	// 			Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
	// 		},
	// 		data: {
	// 			body: editConts,
	// 		},
	// 	}).then((res) => {
	// 		console.log(res);
	// 		setEditModal(false);
	// 		getSentences();
	// 	});
	// }

	// function undo() {
	// 	setEditModal(false);
	// }

	return (
		<>
			{/* {editModal && (
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
			)} */}
			{showTrans && (
				<div ref={outsideRef}>
					<BlueboxModal body={trans} />
				</div>
			)}
			<Comment>
				<Left>
					<Name>{name}</Name>
					<Time>{time}</Time>
				</Left>

				<Right>
					<Contents>{contents}</Contents>
					<BottomDiv>
						{/* {userId
							? id?.toString() === userId && (
									<img
										src={Edit}
										alt="edit"
										onClick={() => {
											setEditModal(true);
										}}
									/>
							  )
							: ""} */}
						<TransDiv>
							<img
								src={Trans}
								alt="translate"
								onClick={() => {
									clickTrans(contents);
								}}
							/>
						</TransDiv>
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

export const Comment = styled.div`
	background-color: #ffffff;
	margin-top: 1rem;
	padding: 1.5rem 1.5rem 1rem 1.5rem;
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	border: 0.063rem solid ${palette.gray4};
	width: 49.75rem;
	@media only screen and (max-width: 768px) {
		width: 17.5rem;
	}
`;

export const Name = styled.div`
	font-size: 1rem;
	color: ${palette.gray1};
	@media only screen and (max-width: 768px) {
		font-size: 0.95rem;
		display: flex;
	}
`;

export const Time = styled.div`
	margin-top: 0.5rem;
	font-size: 0.8rem;
	color: ${palette.gray4};
	@media only screen and (max-width: 768px) {
		margin-left: 1rem;
		margin-top: 0rem;
	}
`;

export const Left = styled.div`
	width: 8rem;
	padding-right: 1rem;
	display: inline-block;
	vertical-align: top;
	text-align: left;
	font-family: Pretendard-Regular;
	@media only screen and (max-width: 768px) {
		width: 16.5rem;
		font-size: 0.95rem;
		display: flex;
	}
`;

export const Right = styled.div`
	width: 39.75rem;
	display: inline-block;
	@media only screen and (max-width: 768px) {
		display: block;
		width: 17.5rem;
	}
`;

export const Contents = styled.div`
	text-align: left;
	font-size: 1.125rem;
	// line-height: 2rem;
	font-family: Pretendard-Regular;
	color: ${palette.gray2};
	@media only screen and (max-width: 768px) {
		font-size: 0.95rem;
		line-height: 1.5rem;
		margin-top: 0.5rem;
	}
`;

export const BottomDiv = styled.div`
	text-align: right;
	margin-top: 1.7rem;
	@media only screen and (max-width: 768px) {
		display: block;
		img {
			width: 0.95rem;
		}
	}
`;

export const HeartDiv = styled.div`
	display: inline-block;
	&:hover {
		cursor: pointer;
	}
`;

export const TransDiv = styled.div`
	display: inline-block;
	padding: 0.3rem 0.4rem;
	border-radius: 0.625rem;
	margin-right: 0.8rem;
	&:hover {
		background-color: ${palette.blue1};
		cursor: pointer;
	}
	@media only screen and (max-width: 768px) {
		margin-right: 0.6rem;
		padding: 0.2rem 0.3rem;
		img {
			width: 1.2rem;
		}
	}
`;

export const Num = styled.div`
	display: inline-block;
	font-size: 0.875rem;
	font-family: Pretendard-Regular;
	color: ${palette.blue2};
`;
