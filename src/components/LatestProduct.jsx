import { getOverview } from "@/helpers";
import React from "react";

const LatestProduct = async () => {
	const overViewData = await getOverview();
	console.log(overViewData);

	return <div>LatestProduct</div>;
};

export default LatestProduct;
