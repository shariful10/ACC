import Image from "next/image";
import image from "@/images/products.png";
import Buttons from "./shared/Buttons";

const AboutUs = () => {
	return (
		<div id="about" className="myContainer my-[50px] md:my-[130px] scroll-smooth">
			<div className="bg-[#F3F3F6] px-5 py-10 md:px-[50px] lg:px-[92px] md:py-[92px] rounded-[40px] grid md:grid-cols-2 items-center gap-x-[84px] gap-y-10">
				<Image src={image} alt="image" />
				<div>
					<h2 className="h2">About Us</h2>
					<p className="p my-10">
						It is a long established fact that a reader will be distracted
						by the readable content of a page when looking at its layout.
						The point of using Lorem Ipsum is that it has a more-or-less
						normal distribution of letters.
					</p>
               <Buttons title={"Read more"} />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
