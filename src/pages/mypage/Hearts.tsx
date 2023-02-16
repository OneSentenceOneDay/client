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
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 1,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 2,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 3,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 4,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 5,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 6,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 7,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 8,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
		},
		{
			id: 9,
			name: "niceonesony",
			contents:
				"We want to know the closest sushi place, make a reservation and be on our way",
			hearts: 11,
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
				{sample2.sentences.map((c) => (
					<Com
						key={c.id}
						id={c.id}
						name={c.name}
						contents={c.contents}
						hearts={c.hearts}
					/>
				))}
				<Pagination />
			</Sentence>

			<FooterComponent />
		</Wrap>
	);
}

export default Hearts;
