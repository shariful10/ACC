import React from "react";
import Image from "next/image";
import logo from "@/images/footerlogo.png";
import facebook from "@/images/facebook.svg";
import printest from "@/images/printest.svg";
import whatsapp from "@/images/whatsapp.svg";
import linkedin from "@/images/linkedin.svg";
import youtube from "@/images/youtube.svg";
import app from "@/images/app.png";
import play from "@/images/play.png";

const Footer = () => {
	return (
		<footer className="container">
			<div className="px-5 py-10 md:py-[100px] md:px-[120px] bg-[#F3F3F6] rounded-[40px] mb-[38px]">
         <div className="grid md:grid-cols-4 gap-10">
				<div className="flex flex-col gap-y-[30px]">
					<Image src={logo} alt="" />
					<p className="text-lg">
						ACC is a historical company founded in 1968 in the Belluno
						area, Italy. The company is recognized as one of the leaders
						in household compressor production.
					</p>
				</div>
				<div className="flex flex-col gap-y-[30px]">
					<h4 className="text-xl font-semibold">Product</h4>
					<div>
						<p className="text-lg">Product</p>
						<p className="text-lg">Refrigerator</p>
						<p className="text-lg">Television</p>
						<p className="text-lg">Washing Machine</p>
					</div>
				</div>
				<div className="flex flex-col gap-y-[30px]">
					<h4 className="text-xl font-semibold">About Us</h4>
					<div>
						<p className="text-lg">About Acc</p>
						<p className="text-lg">Support</p>
						<p className="text-lg">Privacy Policy</p>
					</div>
				</div>
				<div className="flex flex-col gap-y-[30px]">
					<h4 className="text-xl font-semibold">Social Media</h4>
					<div>
						<div className="flex gap-[10px]">
							<Image src={facebook} alt="facebook" />
							<Image src={printest} alt="printest" />
							<Image src={whatsapp} alt="whatsapp" />
							<Image src={linkedin} alt="linkedin" />
							<Image src={youtube} alt="youtube" />
						</div>
						<div className="my-[30px]">
							<p className="text-lg">Connect Us </p>
							<input
								type="email"
								className="py-[10px] pl-[15px] placeholder:text-lg text-[#878787] rounded-[10px] border border-[#050000] bg-transparent mt-[5px]"
								placeholder="Enter email here"
							/>
						</div>
                  <div className="">
                     <p className="text-lg">Our Apps</p>
                     <div className="flex items-center gap-[13px]">
                        <Image src={app} className="w-[111.285px] h-[36.553px]" alt="" />
                        <Image src={play} className="w-[111.285px] h-[32.553px]" alt="" />
                     </div>
                  </div>
					</div>
				</div>
			</div>
         <div className="border border-[#050000] mt-[50px] mb-[33px]" />
         <p className="text-center text-lg">© Copyright {new Date().getFullYear()}, All Rights Reserved by Walton ACC Bangladesh</p>
         </div>
		</footer>
	);
};

export default Footer;
