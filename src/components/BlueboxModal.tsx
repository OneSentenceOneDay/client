import styled from "styled-components";
import palette from "lib/palette";
import Copy from "../assets/icons/copy-icon.svg";
import handleCopyClipBoard from "../apis/copy";

function BlueboxModal({ title, subbody, body }: any) {
	return (
		<Bluebox>
			<Title>
				<Osod>osodAI</Osod>: {title}
			</Title>
			<Subbody>{subbody}</Subbody>
			<Body>{body}</Body>
			<img
				src={Copy}
				onClick={() => {
					handleCopyClipBoard(body);
				}}
			/>
		</Bluebox>
	);
}

export default BlueboxModal;

const Bluebox = styled.dialog`
	display: block;
	flex-direction: row;
	box-sizing: border-box;
	background-color: #ffffff;
	z-index: 10000;
	border: 0.063rem solid ${palette.blue2};
	border-radius: 0.625rem;
	padding: 1.875rem;
	box-shadow: 0rem 1.125rem 2.25rem rgba(0, 0, 0, 0.15);
	font-family: Pretendard-Regular;
	text-align: left;
	color: ${palette.gray2};
	max-width: 42.125rem;
	img {
		width: 1rem;
		margin-top: 1.2rem;
		float: right;
		cursor: pointer;
	}
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
		padding: 1.3rem;
	}
`;

const Osod = styled.div`
	display: inline-block;
	font-family: Pretendard-Bold;
	margin-right: 0.35rem;
`;

const Title = styled.div`
	color: ${palette.blue2};
	font-family: Pretendard-Regular;
`;
const Subbody = styled.div`
	color: ${palette.gray4};
	margin-top: 1rem;
	font-family: Pretendard-Regular;
`;
const Body = styled.div`
	margin-top: 1rem;
	font-family: Pretendard-Regular;
`;
