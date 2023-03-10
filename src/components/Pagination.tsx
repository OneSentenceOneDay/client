import { PageSection, PageDiv } from "./styled";
import { useState, useEffect } from "react";

export default function Pagination({ pages, page, setPage }: any) {
	const [pageList, setPageList] = useState<number[]>([]);
	const [currPage, setCurrPage] = useState<number>(page);
	const [firstNum, setFirstNum] = useState<number>(1);
	const [lastNum, setLastNum] = useState<number>(pages < 5 ? pages : 5);
	console.log(pages);
	// var firstNum: number;
	// var lastNum: number;
	console.log("page " + page);
	console.log("last " + lastNum);
	console.log("first " + firstNum);
	console.log("currpage:" + currPage);
	useEffect(() => {
		// firstNum = page - (page % 5) + 1;
		// lastNum = pages < page - (page % 5) + 5 ? pages : page - (page % 5) + 5;
		setFirstNum(page - (page % 5) + 1);
		setLastNum(pages < page - (page % 5) + 5 ? pages : page - (page % 5) + 5);
	}, [currPage, pages]);

	useEffect(() => {
		const tempPages: number[] = [];
		for (let i = firstNum; i <= lastNum; i++) {
			tempPages.push(i);
		}
		setPageList(tempPages);
	}, [lastNum]);

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
