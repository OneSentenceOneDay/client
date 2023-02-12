import { PageSection, PageDiv } from "./styled";
import { useState, useEffect } from "react";

export default function Pagination() {
	const [page, setPage] = useState(1);
	let firstNum = page - (page % 5) + 1;
	let lastNum = page - (page % 5) + 5;
	const [pages, setPages] = useState<number[]>([]);
	const lastPage: number = 10;
	useEffect(() => {
		const tempPages: number[] = [];
		for (let i = firstNum; i <= lastNum; i++) {
			tempPages.push(i);
		}
		setPages(tempPages);
	}, [page]);
	// const tempPages: number[] = [];
	// for (let i = 1; i <= lastPage; i++) {
	// 	tempPages.push(i);
	// }
	// setPages(tempPages);

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
			{pages.map((pageNum) =>
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
