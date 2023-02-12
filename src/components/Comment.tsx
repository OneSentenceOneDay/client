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

type commetType = {
	id: number;
	name: string;
	contents: string;
	hearts: number;
};

export default function Com({ id, name, contents, hearts }: commetType) {
	return (
		<Comment>
			<Name>{name}</Name>
			<Right>
				<Contents>{contents}</Contents>
				<BottomDiv>
					<img src={Trans} alt="translate" />
					<HeartDiv>
						<img src={Heart} alt="heart" />
						<Num>{hearts}</Num>
					</HeartDiv>
				</BottomDiv>
			</Right>
		</Comment>
	);
}
