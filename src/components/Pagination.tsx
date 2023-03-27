import styled from "styled-components";
import palette from "lib/palette";
import { useState, useEffect } from "react";

export default function Pagination({ pages, page, setPage }: any) {
	const [pageList, setPageList] = useState<number[]>([]);
	const [currPage, setCurrPage] = useState<number>(page);
	const [firstNum, setFirstNum] = useState<number>(1);
	const [lastNum, setLastNum] = useState<number>(pages < 5 ? pages : 5);
	// var firstNum: number;
	// var lastNum: number;
	// console.log("page " + page);
	// console.log("first " + firstNum);
	// console.log("last " + lastNum);
	// console.log("currpage:" + currPage);
	useEffect(() => {
		// firstNum = page - (page % 5) + 1;
		// lastNum = pages < page - (page % 5) + 5 ? pages : page - (page % 5) + 5;
		setFirstNum(page - (page % 5) + 1);
		setLastNum(pages < page - (page % 5) + 5 ? pages : page - (page % 5) + 5);
	}, [page, pages]);

	useEffect(() => {
		const tempPages: number[] = [];
		for (let i = firstNum; i <= lastNum; i++) {
			tempPages.push(i);
		}
		setPageList(tempPages);
	}, [firstNum, lastNum]);

	return (
		<PageSection>
			<PageDiv
				style={{ fontSize: "1rem" }}
				flag={false}
				onClick={() => {
					setPage(1);
					setCurrPage(1);
				}}
			>
				&#171;
			</PageDiv>
			<PageDiv
				style={{ fontSize: "1rem" }}
				flag={false}
				onClick={() => {
					if (page > 1) {
						setPage(page - 1);
					}
					if (page > 1 && page - 1 < firstNum) {
						setCurrPage(page - 5);
					}
				}}
			>
				&#8249;
			</PageDiv>
			{pageList.map((pageNum: number) =>
				pageNum === page ? (
					<PageDiv flag={true} key={pageNum} onClick={() => setPage(pageNum)}>
						{pageNum}
					</PageDiv>
				) : (
					<PageDiv flag={false} key={pageNum} onClick={() => setPage(pageNum)}>
						{pageNum}
					</PageDiv>
				)
			)}
			<PageDiv
				style={{ fontSize: "1rem" }}
				flag={false}
				onClick={() => {
					if (pages > page) {
						setPage(page + 1);
					}
					if (pages > page && page + 1 > lastNum) {
						setCurrPage(page + 1);
					}
				}}
			>
				&#8250;
			</PageDiv>
			<PageDiv
				style={{ fontSize: "1rem" }}
				flag={false}
				onClick={() => {
					setPage(pages);
					setCurrPage(page - (page % 5) + 1);
				}}
			>
				&#187;
			</PageDiv>
		</PageSection>
	);
}

export const PageSection = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: right;
	@media only screen and (max-width: 768px) {
		width: 20.5rem;
		justify-content: center;
	}
`;

export const PageDiv = styled.div<{ flag: boolean }>`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	line-height: 2rem;
	border: 0.063rem solid
		${(props) => (props.flag ? palette.blue2 : palette.gray4)};
	border-radius: 0.625rem 0.625rem 0.625rem 0.625rem;
	background-color: ${(props) => (props.flag ? palette.blue2 : palette.gray3)};
	color: ${(props) => (props.flag ? palette.gray3 : palette.blue2)};
	font-family: Pretendard-Regular;
	font-size: 0.9rem;
	margin-left: 0.4rem;
	&:hover {
		cursor: pointer;
		color: ${(props) => (props.flag ? palette.gray3 : palette.blue2)};
		background-color: ${(props) =>
			props.flag ? palette.blue2 : palette.blue6};
	}
	@media only screen and (max-width: 768px) {
		width: 1.5rem;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.7rem;
	}
`;
