import { useRef, useEffect, Dispatch, SetStateAction } from "react";

function closeModal(
	outsideRef: HTMLDialogElement,
	setShowTrans: Dispatch<SetStateAction<boolean>>
) {
	// useEffect(() => {
	// 	function handleClickOutside(event: any) {
	// 		if (outsideRef.current && !outsideRef.current.contains(event.target)) {
	// 			setShowTrans(false);
	// 		}
	// 	}
	// 	document.addEventListener("click", handleClickOutside);
	// 	return () => {
	// 		document.removeEventListener("click", handleClickOutside);
	// 	};
	// }, [outsideRef]);
}

export default closeModal;
