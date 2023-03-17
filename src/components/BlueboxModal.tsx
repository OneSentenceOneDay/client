import styled from "styled-components";
import palette from "lib/palette";
import Copy from "../assets/icons/copy-icon.svg";
import handleCopyClipBoard from "../apis/copy";

type Props = {
	// ref: HTMLDialogElement | null | undefined;
	// ref: any;
	title?: string;
	subbody?: string;
	body: string;
};

function BlueboxModal({ title, subbody, body }: Props) {
	return (
		<Bluebox>
			<Title flag={title ? false : true}>
				<Osod>osodAI</Osod>: {title}
			</Title>
			<Subbody flag={title ? false : true}>{subbody}</Subbody>
			<Body flag={title ? false : true}>{body}</Body>
			{title && (
				<img
					src={Copy}
					onClick={() => {
						handleCopyClipBoard(body);
					}}
				/>
			)}
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
	padding: 1.8rem;
	box-shadow: 0rem 1.125rem 2.25rem rgba(0, 0, 0, 0.15);
	font-family: Pretendard-Regular;
	text-align: left;
	font-size: 1rem;
	color: ${palette.gray2};
	max-width: 42.125rem;
	min-width: 30rem;
	img {
		width: 1rem;
		margin-top: 1.2rem;
		float: right;
		cursor: pointer;
	}
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
		padding: 1.3rem;
		min-width: 20.5rem;
		max-width: 20.5rem;
	}
`;

const Osod = styled.div`
	display: inline-block;
	font-family: Pretendard-Bold;
	margin-right: 0.35rem;
`;

const Title = styled.div<{ flag: boolean }>`
	color: ${palette.blue2};
	font-family: Pretendard-Regular;
	display: ${(props) => (props.flag ? "none" : "")};
`;
const Subbody = styled.div<{ flag: boolean }>`
	color: ${palette.gray4};
	display: ${(props) => (props.flag ? "none" : "")};
	margin-top: 1rem;
	font-family: Pretendard-Regular;
`;
const Body = styled.div<{ flag: boolean }>`
	margin-top: ${(props) => (props.flag ? "" : "1rem")};
	font-family: Pretendard-Regular;
`;
