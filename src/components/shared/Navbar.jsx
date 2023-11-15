"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import logo2 from "@/images/logo2.png";
import React, { useState } from "react";
import search from "@/images/search.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [active, setActive] = useState("home");
	const [isMenuToggle, setIsMenuToggle] = useState(false);

	return (
		<nav className="xl:w-5/6 mx-auto px-5 xl:px-0">
			<div className="flex justify-between items-center py-[38px]">
				<Link href="/">
					<Image src={logo} alt="Logo" />
				</Link>
				<div className="hidden lg:flex justify-between items-center gap-[30px] border border-[#E4E4E4] px-[13.39px] py-2 rounded-full cursor-pointer text-lg xl:text-xl font-semibold">
					<Link
						onClick={() => setActive("home")}
						href={"/"}
						className={`${active === "home" && "text-[#2F7CE3]"}`}
					>
						Home
					</Link>
					<Link
						onClick={() => setActive("about")}
						href={"/"}
						className={`${active === "about" && "text-[#2F7CE3]"}`}
					>
						About Us
					</Link>
					<Link
						onClick={() => setActive("service")}
						href={"/"}
						className={`${active === "service" && "text-[#2F7CE3]"}`}
					>
						Request Service
					</Link>
					<p>Find A Store</p>
					<Image src={search} alt="search" />
					<button className="bg-[#2F7CE3] duration-300 hover:bg-blue-700 text-white py-2 px-[26px] rounded-full xl:text-xl">
						Log In
					</button>
				</div>
				<div className="hidden xl:flex gap-[10px] items-center">
					<Image src={logo2} alt="house" />
					<div className="text-xl font-semibold">
						<p>ACC InstaHome</p>
						<p>Download App Now</p>
					</div>
				</div>
				<button
					className="rounded-full bg-secondary-500 p-2 lg:hidden"
					onClick={() => setIsMenuToggle(!isMenuToggle)}
				>
					<Bars3Icon className="h-6 w-6 text-white" />
				</button>
			</div>
			{isMenuToggle && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 shadow-2xl">
					{/* <==<<=== Close Icon ===>>==> */}
					<div className="flex justify-end px-12 pb-12 pt-7">
						<button onClick={() => setIsMenuToggle(!isMenuToggle)}>
							<XMarkIcon className="h-8 w-8 text-gray-400" />
						</button>
					</div>
					{/* <==<<=== Menu Items ===>>==> */}
					<div className="ml-[33%] flex flex-col gap-10 text-2xl">
						<Link
							onClick={() => setActive("home")}
							href={"/"}
							className={`${active === "home" && "text-[#2F7CE3]"}`}
						>
							Home
						</Link>
						<Link
							onClick={() => setActive("about")}
							href={"/"}
							className={`${active === "about" && "text-[#2F7CE3]"}`}
						>
							About Us
						</Link>
						<Link
							onClick={() => setActive("service")}
							href={"/"}
							className={`${active === "service" && "text-[#2F7CE3]"}`}
						>
							Request Service
						</Link>
						<p>Find A Store</p>
						<Image src={search} alt="search" />
						<button className="bg-[#2F7CE3] duration-300 hover:bg-blue-700 text-white py-2 px-[26px] rounded-full xl:text-xl">
							Log In
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
