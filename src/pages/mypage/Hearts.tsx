import { Wrap } from "./../../components/styled";
import { Name, Nickname, Sentence, Text } from "./styled";
import Com from "components/Comment";
import FooterComponent from "components/Footer";
import Pagination from "components/Pagination";

const sample2 = {
	day: "2023.01.19 목요일",
	sentences: [
		{
			id: 0,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 1,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 2,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 3,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 4,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 5,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 6,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 7,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 8,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
		{
			id: 9,
			postId: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
			bool_like: true,
		},
	],
};
function Hearts() {
	return (
		<Wrap>
			<Name>손흥민</Name>
			<Nickname>@niceonesony</Nickname>
			<Sentence flag={true}>
				<Text>♡ 모아보기</Text>
				{/* {sample2.sentences.map((c) => (
					<Com
						key={c.id}
						id={c.id}
						postId={1}
						name={c.name}
						contents={c.contents}
						hearts={c.hearts}
						bool_like={c.bool_like}
					/>
				))} */}
				<Pagination />
			</Sentence>

			<FooterComponent />
		</Wrap>
	);
}

export default Hearts;
