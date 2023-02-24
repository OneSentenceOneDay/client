import { useState, useEffect } from "react";
import axios from "axios";

// get
export function get(initialUrl: string) {
	const [url, setUrl] = useState(initialUrl);
	const [value, setValue] = <any>useState();

	useEffect(() => {
		fetchData();
	}, [url]);
	function fetchData() {
		axios({
			method: "get",
			url: url,
		}).then((res) => {
			setValue(res);
		});
		return value;
	}
}
