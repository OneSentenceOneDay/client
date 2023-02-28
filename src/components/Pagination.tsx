import { PageSection, PageDiv } from "./styled";
import { useState, useEffect } from "react";

export default function Pagination({ pages, page, setPage }: any) {
	// let firstNum = pages - (pages % 5) + 1;
	// let lastNum = pages - (pages % 5) + 5;

	const lastPage: number = pages;
	const [pageList, setPageList] = useState<number[]>([]);

	console.log(pages);
	useEffect(() => {
		const tempPages: number[] = [];
		for (let i = 1; i <= pages; i++) {
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
					if (lastPage > page) {
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
					setPage(lastPage);
				}}
			>
				&#187;
			</PageDiv>
		</PageSection>
	);
}
