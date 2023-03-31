import React, { useEffect } from "react";

// style={{ display: "inline-block", width: "728px", height: "90px" }}

// (adsbygoogle = window.adsbygoogle || []).push({})

declare let adsbygoogle: any;

function GoogleAdvertise({
	className = "adsbygoogle",
	client = "ca-pub-1919598055512436",
	slot = "",
	format = "fluid",
	// responsive = "true",
	// layoutKey = "",
	width = "",
	height = "",
	margin = "",
}) {
	useEffect(() => {
		try {
			(adsbygoogle = (window as any).adsbygoogle || []).push({});
			console.log("Advertise is pushed");
		} catch (e) {
			if (process.env.NODE_ENV !== "production")
				console.error("AdvertiseError", e);
		}
	}, []);
	return (
		<ins
			className={className}
			style={{
				width: width,
				height: height,
				margin: margin,
				textAlign: "center",
				display: "inline-block",
			}}
			data-ad-client={client}
			data-ad-slot={slot}
			data-ad-format={format}
			// data-full-width-responsive={responsive}
			// data-ad-layout-key={layoutKey}
		/>
	);
}

export default GoogleAdvertise;
