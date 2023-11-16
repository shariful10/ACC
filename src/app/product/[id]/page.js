"use client";
import Image from "next/image";
import star from "@/images/star.svg";
import blue from "@/images/blue.svg";
import pink from "@/images/pink.svg";
import yellow from "@/images/yellow.svg";
import { overview } from "@/constants/data";
import { useParams } from "next/navigation";
import starFill from "@/images/starfill.png";

const ProductDetail = () => {
	const { id } = useParams();
	console.log(id);
	const overviewData = overview.find(
		(product) => product.id.toString() === id
	);
	console.log(overviewData);

	return (
		<div className="myContainer mt-[50px] md:mt-[80px]">
			<div className="grid md:grid-cols-2 gap-[50px]">
				<div className="bg-[#F3F3F6] px-[134px] py-[81px] rounded-[40px]">
					<Image
						src={overviewData.Image_Url}
						className="w-[433px] mx-auto"
						alt="image"
					/>
				</div>
				<div>
					<h2 className="h2">Television</h2>
					<p className="p">
						It is a long established fact that a reader will be distracted
						by the readable content of a page when looking at its layout.
						The point of using Lorem Ipsum is that it has a more-or-less
						normal distribution of letters.
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
							<Image src={star} width={30} height={30} alt="starfill" />
						</div>
						<p className="p">4.6 (1556)</p>
					</div>
					<div className="flex items-end gap-[10] mb-[50px]">
						<h2 className="h2 primary leading-[40px]">
							${overviewData.price}
						</h2>
						<p className="primary p">(No discount available)</p>
					</div>
					<div className="flex items-center gap-[30px]">
						<div className="py-6 px-[58px] border border-[#557597] rounded-[15px] flex flex-col items-center ">
							<Image src={blue} width={30} height={30} alt="blue" />
							<p className="p mt-4 font-semibold">Blue</p>
						</div>
						<div className="py-6 px-[58px] border border-[#557597] rounded-[15px] flex flex-col items-center ">
							<Image src={pink} width={30} height={30} alt="blue" />
							<p className="p mt-4 font-semibold">Pink</p>
						</div>
						<div className="py-6 px-[58px] border border-[#557597] rounded-[15px] flex flex-col items-center ">
							<Image src={yellow} width={30} height={30} alt="blue" />
							<p className="p mt-4 font-semibold">Yellow</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
