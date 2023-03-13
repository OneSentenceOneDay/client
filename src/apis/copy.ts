export default function handleCopyClipBoard(text: string) {
	try {
		navigator.clipboard.writeText(text);
	} catch (e) {
		alert("복사에 실패하였습니다");
	}
}
