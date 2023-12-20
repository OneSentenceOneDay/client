import { useState, useEffect, useReducer } from "react";
import axios from "axios";

// get
// export function useGet(url: string) {
// 	const [value, setValue] = useState<any>();

// 	useEffect(() => {
// 		fetchData();
// 	}, [url]);

// 	function fetchData() {
// 		axios({
// 			method: "get",
// 			url: `https://port-0-osod-108dypx2ale9l8kjq.sel3.cloudtype.app${url}`,
// 		}).then((res) => {
// 			setValue(res);
// 		});
// 	}
// 	return value;
// }

// function reducer({state, action}: any) {
// 	switch (action.type) {
// 		case 'LOADING':
// 			return {
// 				loading: true,
// 				data: null,
// 				error: null
// 			};
// 		case "SUCCESS":
// 			return {
// 				loading: false,
// 				data: action.data,
// 				error: null
// 			};
// 		case 'ERROR':
// 			return {
// 				loading: false,
// 				data: null,
// 				error: action.error
// 			}
// 		default:
// 			throw new Error(`Unhandled action type: ${action.type}`)
// 	}
// }

// export function useAsync({apiCallback, deps = []}: any) {
//   const [state, dispatch] = useReducer(reducer, {
//     loading: false,
//     data: null,
//     error: null,
//   });

//   useEffect(() => {
//     dispatch({ type: "LOADING" }); // 로딩 상태 시작

//     apiCallback()  // 인자로 받아온 데이터 불러오는 로직
//       .then((data: any) => dispatch({ type: "SUCCESS", data }))  // 성공적으로 불러와졌으면 data를 업데이트, 로딩끝
//       .catch((error: any) => {
//         dispatch({ type: "ERROR", error });  // 에러가 났으면 에러 상태 변경 , 로딩끝
//       });
//     // warning 제거
//     // eslint-disable-next-line
//   }, deps);

//   return [state, ];
// };

export async function getData(url: string, setData: any, setLoading: any) {
	setLoading(true);
	await axios({
		method: "get",
		url: `https://api.osod.site/${url}`,
	}).then((res) => {
		setData(res.data);
	});
	setLoading(false);
}
