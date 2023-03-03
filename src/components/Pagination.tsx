import { PageSection, PageDiv } from "./styled";
import { useState, useEffect } from "react";

export default function Pagination({ pages, page, setPage }: any) {
	const [pageList, setPageList] = useState<number[]>([]);
	useEffect(() => {
		let firstNum = page - (page % 5) + 1;
		let lastNum = page - (page % 5) + 5;
		console.log(firstNum);
		console.log(lastNum);
		console.log("page:" + page);
		const tempPages: number[] = [];
		for (let i = firstNum; i <= lastNum; i++) {
			tempPages.push(i);
		}
		setPageList(tempPages);
	}, [page, pages]);

	return (
		<PageSection>
			<PageDiv
				style={{ fontSize: "1rem" }}
				flag={false}
				onClick={() => {
					setPage(1);
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
				}}
			>
				&#8250;
			</PageDiv>
			<PageDiv
				style={{ fontSize: "1rem" }}
				flag={false}
				onClick={() => {
					setPage(pages);
				}}
			>
				&#187;
			</PageDiv>
		</PageSection>
	);
}
