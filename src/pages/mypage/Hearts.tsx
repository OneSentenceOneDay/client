import { Wrap } from "./../../components/styled";
import { Name, Nickname, Sentence, Text } from "./styled";
import Com from "components/Comment";
import FooterComponent from "components/Footer";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "components/Loading";
import tokenNotValid from "apis/tokenNotValid";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API;

function Hearts() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// ************************ get 좋아요 클릭한 문장 ************************
	const [posts, setPosts] = useState<any>([]);

	function getPosts() {
		setLoading(true);
		axios({
			method: "get",
			url: `${BASE_URL}/writing/mypage/ilike/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				setPosts(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				}
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
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then(() => {
				getPosts();
			})
			.catch((e) => {
				if (e.response.data.code === "token_not_valid") {
					tokenNotValid();
					navigate("/");
					window.location.reload(); // 새로고침
				}
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

	if (loading) return <Loading />;
	return (
		<Wrap>
			<Name>{localStorage.getItem("nickname")}</Name>
			<Nickname>{localStorage.getItem("email")}</Nickname>
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
