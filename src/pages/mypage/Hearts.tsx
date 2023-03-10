import { Wrap } from "./../../components/styled";
import { Name, Nickname, Sentence, Text } from "./styled";
import Com from "components/Comment";
import FooterComponent from "components/Footer";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

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
	const [loading, setLoading] = useState(false);
	// ************************ get 좋아요 클릭한 문장 ************************
	const [posts, setPosts] = useState<any>([]);

	function getPosts() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/ilike/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			setPosts(res.data);
			console.log(res.data);
			setLoading(false);
		});
	}
	useEffect(() => {
		getPosts();
	}, []);

	// ************************ 좋아요 클릭 ************************
	async function clickLikes(id: number) {
		await axios({
			method: "get",
			url: `${BASE_URL}/writing/post/${id}/likes/`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
			},
		}).then((res) => {
			getPosts();
		});
	}

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
			console.log(res.data.translation);
			setShowTrans(true);
			console.log(showTrans);
		});
	}

	if (loading) return <div>로딩 중 ...</div>;
	return (
		<Wrap>
			<Name>{sessionStorage.getItem("nickname")}</Name>
			<Nickname>{sessionStorage.getItem("email")}</Nickname>
			<Sentence flag={true}>
				<Text>♡ 모아보기</Text>
				{posts.map((c: any) => (
					<Com
						key={c.id}
						id={c.unknown ? null : c.user.id}
						postId={c.id}
						name={c.unknown ? c.unknown : c.user.nickname}
						contents={c.body}
						hearts={c.like_num}
						bool_like={c.bool_like}
						clickLikes={clickLikes}
						clickTrans={clickTrans}
					/>
				))}
				{/* <Pagination /> */}
			</Sentence>

			<FooterComponent />
		</Wrap>
	);
}

export default Hearts;
