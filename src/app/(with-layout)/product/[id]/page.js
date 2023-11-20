"use client";
import Image from "next/image";
import star from "@/images/star.svg";
import blue from "@/images/blue.svg";
import pink from "@/images/pink.svg";
import yellow from "@/images/yellow.svg";
import { overview } from "@/constants/data";
import { useParams } from "next/navigation";
import starFill from "@/images/starfill.png";
import { useState } from "react";
import Features from "@/components/Tabs/Features";
import TecnicalSpecification from "@/components/Tabs/TecnicalSpecification";
import Gallery from "@/components/Tabs/Gallery";
import Supports from "@/components/Tabs/Supports";

const ProductDetail = () => {
	const { id } = useParams();
	console.log(id);
	const overviewData = overview.find(
		(product) => product.id.toString() === id
	);
	const [tab, setTab] = useState("feature");

	return (
		<>
			<div className="myContainer my-[50px] md:my-[80px]">
				<div className="lg:flex gap-[50px]">
					<div className="bg-[#F3F3F6] 2xl:px-[134px] 2xl:py-[81px] rounded-[40px] flex items-center">
						<Image
							src={overviewData.Image_Url}
							className="w-[1000px] 2xl:w-[433px] mx-auto"
							alt="image"
						/>
					</div>
					<div className="mt-[50px]">
						<h2 className="h2">{overviewData.name}</h2>
						<p className="p">
							It is a long established fact that a reader will be
							distracted by the readable content of a page when looking
							at its layout. The point of using Lorem Ipsum is that it
							has a more-or-less normal distribution of letters.
						</p>
						<div className="flex items-center gap-[10px] my-[50px]">
							<div className="flex items-center gap-[10px]">
								<Image
									src={starFill}
									width={30}
									height={30}
									alt="starfill"
								/>
								<Image
									src={starFill}
									width={30}
									height={30}
									alt="starfill"
								/>
								<Image
									src={starFill}
									width={30}
									height={30}
									alt="starfill"
								/>
								<Image
									src={starFill}
									width={30}
									height={30}
									alt="starfill"
								/>
								<Image
									src={star}
									width={30}
									height={30}
									alt="starfill"
								/>
							</div>
							<p className="p">4.6 (1556)</p>
						</div>
						<div className="flex items-end gap-[10] mb-[50px]">
							<h2 className="h2 primary leading-[40px]">
								${overviewData.price}
							</h2>
							<p className="primary p">(No discount available)</p>
						</div>
						<div className="grid grid-cols-3 items-center gap-[30px]">
							<div className="py-6 md:px-[58px] w-full border border-[#557597] rounded-[15px] flex flex-col items-center ">
								<Image src={blue} width={30} height={30} alt="blue" />
								<p className="p mt-4 font-semibold">Blue</p>
							</div>
							<div className="py-6 md:px-[58px] w-full border border-[#557597] rounded-[15px] flex flex-col items-center ">
								<Image src={pink} width={30} height={30} alt="blue" />
								<p className="p mt-4 font-semibold">Pink</p>
							</div>
							<div className="py-6 md:px-[58px] w-full border border-[#557597] rounded-[15px] flex flex-col items-center ">
								<Image src={yellow} width={30} height={30} alt="blue" />
								<p className="p mt-4 font-semibold">Yellow</p>
							</div>
						</div>
					</div>
				</div>
			</div>
         <div className="myContainer">
			<h2 className="h2">Details More</h2>
			<div className="flex items-end md:items-center gap-5 md:gap-[71px] text-lg xl:text-xl cursor-pointer mt-[50px] overflow-scroll md:overflow-hidden mb-[30px] border-b-2 border-[#2F7CE3] font-bold">
				<p
					onClick={() => setTab("feature")}
					className={`${
						tab === "feature"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					}`}
				>
					Feature
				</p>
				<p
					onClick={() => setTab("technical")}
					className={`${
						tab === "technical"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					} flex items-center`}
				>
					Technical <span className="ml-2">Specification</span>
				</p>
				<p
					onClick={() => setTab("gallery")}
					className={`${
						tab === "gallery"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					} flex items-center`}
				>
					Picture <span className="ml-2">Gallery</span>
				</p>
				<p
					onClick={() => setTab("supports")}
					className={`${
						tab === "supports"
							? "text-blue-500 border-b-2 border-blue-500"
							: "border-b-2 border-white"
					}`}
				>
					Supports
				</p>
			</div>
			<div className="mb-[50px] md:mb-[130px]">
				{tab === "feature" && <Features />}
				{tab === "technical" && <TecnicalSpecification />}
				{tab === "gallery" && <Gallery />}
				{tab === "supports" && <Supports />}
			</div>
		</div>
		</>
	);
};

export default ProductDetail;
