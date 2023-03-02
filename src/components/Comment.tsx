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

type commetType = {
	id: number | null;
	postId: number;
	name: string;
	contents: string;
	hearts: number;
	bool_like: boolean;
	onClick: (id: number) => void;
};

export default function Com({
	id,
	postId,
	name,
	contents,
	hearts,
	bool_like,
	onClick,
}: commetType) {
	const userId: string | null = sessionStorage.getItem("id");

	return (
		<Comment>
			<Name>{name}</Name>
			<Right>
				<Contents>{contents}</Contents>
				<BottomDiv>
					{userId
						? id?.toString() === userId && <img src={Edit} alt="edit" />
						: ""}
					<img src={Trans} alt="translate" />
					<HeartDiv>
						{bool_like ? (
							<img
								src={ColorHeart}
								alt="heart"
								onClick={() => onClick(postId)}
							/>
						) : (
							<img src={Heart} alt="heart" onClick={() => onClick(postId)} />
						)}

						<Num>{hearts}</Num>
					</HeartDiv>
				</BottomDiv>
			</Right>
		</Comment>
	);
}
