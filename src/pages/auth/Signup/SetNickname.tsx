import React, { useState } from "react";
import { InnerWrap } from "../Login/styled";
import { Wrap } from "components/styled";
import { Input } from "components/Input";
import { Text } from "../Password/styled";
import axios from "axios";
import { BlueBigButton } from "components/Button";
import { WarningText } from "./styled";

const BASE_URL = process.env.REACT_APP_API;

function SetNickname() {
	const [nickname, setNickname] = useState<string>("");
	const [nameError, setNameError] = useState<boolean>(true); // 닉네임 에러 확인

	function settingNickname() {
		axios({
			method: "post",
			url: `${BASE_URL}/accounts/make-nickname/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			data: { nickname: nickname },
		})
			.then((r) => {
				localStorage.setItem("nickname", nickname);
				localStorage.setItem("name", r.data.name);
			})
			.catch((e) => {
				// console.log(e.response.data.detail);
				setNameError(false);
			});
	}

	return (
		<Wrap>
			<InnerWrap>
				<Text>닉네임을 설정해 주세요</Text>
				<Input noWarning={nameError} page="signup">
					<input
						value={nickname}
						placeholder="Nickname"
						onChange={(e) => {
							setNickname(e.target.value);
						}}
					/>
				</Input>
				<WarningText noWarning={nameError}>
					* 중복이거나 잘못된 닉네임입니다
				</WarningText>
				<BlueBigButton onClick={settingNickname}>확인</BlueBigButton>
			</InnerWrap>
		</Wrap>
	);
}

export default SetNickname;
