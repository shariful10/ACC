"use client";
import { useState } from "react";
import Overview from "./Tabs/Overview";
import AirConditioner from "./Tabs/AirConditioner";
import Refrigerator from "./Tabs/Refrigerator";
import Television from "./Tabs/Television";
import WashingMachine from "./Tabs/WashingMachine";

const LatestProduct = () => {
	const [tab, setTab] = useState("overview");

	return (
		<div className="myContainer">
			<h2 className="h2 text-center">Shop our Latest Product</h2>
			<div className="flex justify-start md:justify-center items-end md:items-center gap-5 md:gap-[71px] text-lg xl:text-xl cursor-pointer font-semibold mt-[60px] overflow-scroll md:overflow-hidden mb-[30px]">
				<p
					onClick={() => setTab("overview")}
					className={`${
						tab === "overview"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					}`}
				>
					Overview
				</p>
				<p
					onClick={() => setTab("ac")}
					className={`${
						tab === "ac"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					} flex items-center`}
				>
					Air <span className="ml-2">Conditioner</span>
				</p>
				<p
					onClick={() => setTab("refrigerator")}
					className={`${
						tab === "refrigerator"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					}`}
				>
					Refrigerator
				</p>
				<p
					onClick={() => setTab("tv")}
					className={`${
						tab === "tv"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					}`}
				>
					Television
				</p>
				<p
					onClick={() => setTab("machine")}
					className={`${
						tab === "machine"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					} flex items-center`}
				>
					Washing <span className="ml-2">Machine</span>
				</p>
			</div>
			<div className="">
				{tab === "overview" && <Overview />}
				{tab === "ac" && <AirConditioner />}
				{tab === "refrigerator" && <Refrigerator />}
				{tab === "tv" && <Television />}
				{tab === "machine" && <WashingMachine />}
			</div>
		</div>
	);
};

export default LatestProduct;
