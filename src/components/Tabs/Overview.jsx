import Link from "next/link";
import Image from "next/image";
import { overview } from "@/constants/data";
import { FaAngleRight } from "react-icons/fa6";

const Overview = () => {
	return (
		<>
			<div className="grid sm:grid-cols-2 items-center justify-center gap-[30px] px-5 md:px-0">
				{overview.slice(0, 2).map(({ id, name, desc, link, Image_Url }) => (
					<div
						key={id}
						className="bg-[#F3F3F6] text-center px-[75px] sm:px-[30px] py-10 md:px-[70px] 2xl:px-[134px] md:py-[81px] rounded-[40px]"
					>
						<h3 className="h3">{name}</h3>
						<p className="text-lg xl:text-xl py-2">{desc}</p>
						<Link href={`/product/${id}`}>
							<button className="text-[#2F7CE3] flex justify-center items-center mx-auto group">
								<span>{link}</span>{" "}
								<FaAngleRight className="group-hover:ml-2 duration-100" />
							</button>
						</Link>
						<Image
							src={Image_Url}
							className="w-[298px] min-h-[257px] mx-auto"
							alt="image"
						/>
					</div>
				))}
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-[30px] mt-[30px]">
				{overview.slice(2, 5).map(({ id, name, desc, link, Image_Url }) => (
					<div
						key={id}
						className="bg-[#F3F3F6] text-center px-5 py-10 md:px-[70px] 2xl:px-[134px] md:py-[81px] rounded-[40px]"
					>
						<h4 className="h4">{name}</h4>
						<p className="text-lg xl:text-xl py-2">{desc}</p>
						<Link href={`/product/${id}`}>
							<button className="text-[#2F7CE3] flex justify-center items-center mx-auto group">
								<span>{link}</span>{" "}
								<FaAngleRight className="group-hover:ml-2 duration-100" />
							</button>
						</Link>
						<Image
							src={Image_Url}
							className="w-[298px] min-h-[257px] max-h-[181px] mx-auto"
							alt="image"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Overview;
