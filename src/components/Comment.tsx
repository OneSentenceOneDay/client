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
import { useState } from "react";
import { DialogBox } from "pages/auth/Login/styled";

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
}: // clickTrans,
commetType) {
	const userId: string | null = sessionStorage.getItem("id");

	// ************************ 수정 ************************
	function edit() {}

	return (
		<Comment>
			<Name>{name}</Name>
			<Right>
				<Contents>
					{contents}
					{/* {showTrans && <TransModal>{trans}</TransModal>} */}
				</Contents>
				<BottomDiv>
					{/* {userId
						? id?.toString() === userId && <img src={Edit} alt="edit" />
						: ""} */}
					{/* <img
						src={Trans}
						alt="translate"
						onClick={() => {
							clickTrans(contents);
						}}
					/> */}
					<HeartDiv>
						{bool_like ? (
							<img
								src={ColorHeart}
								alt="heart"
								onClick={() => clickLikes(postId)}
							/>
						) : (
							<img src={Heart} alt="heart" onClick={() => clickLikes(postId)} />
						)}

						<Num>{hearts}</Num>
					</HeartDiv>
				</BottomDiv>
			</Right>
		</Comment>
	);
}
