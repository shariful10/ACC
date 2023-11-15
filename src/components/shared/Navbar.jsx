"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import logo2 from "@/images/logo2.png";
import React, { useState } from "react";
import search from "@/images/search.svg";
import logo3 from "@/images/footerlogo.png";
import { IoMdSearch } from "react-icons/io";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [active, setActive] = useState("home");
	const [isMenuToggle, setIsMenuToggle] = useState(false);

	return (
		<nav className="container">
			<div className="flex justify-between items-center pt-[38px]">
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
					className="rounded-full bg-[#2F7CE3] p-2 block lg:hidden"
					onClick={() => setIsMenuToggle(true)}
				>
					<Bars3Icon className="h-6 w-6 text-white" />
				</button>
			</div>
			<div
				className={`${
					isMenuToggle
						? "right-0 transition-all duration-500"
						: "-right-[500px] transition-all duration-500"
				} fixed w-full bottom-0 z-40 h-full bg-[#2F7CE3] shadow-2xl lg:hidden`}
			>
				{/* <==<<=== Close Icon ===>>==> */}
				<div className="flex justify-between px-12 pb-12 pt-7">
					<Link href="/">
						<Image src={logo3} alt="Logo" />
					</Link>
					<button
						onClick={() => setIsMenuToggle(false)}
					>
						<XMarkIcon className="h-8 w-8 text-black" />
					</button>
				</div>
				{/* <==<<=== Menu Items ===>>==> */}
				<div className="mx-[15%] flex flex-col gap-10 text-2xl text-black">
					<Link
						onClick={() => setActive("home")}
						href={"/"}
						className={`${active === "home" && "text-white"}`}
					>
						Home
					</Link>
					<Link
						onClick={() => setActive("about")}
						href={"/"}
						className={`${active === "about" && "text-white"}`}
					>
						About Us
					</Link>
					<Link
						onClick={() => setActive("service")}
						href={"/"}
						className={`${active === "service" && "text-white"}`}
					>
						Request Service
					</Link>
					<div className="flex items-center">
						<p>Find A Store</p>
						<IoMdSearch className="ml-3" />
					</div>
					<button className="bg-black duration-300 hover:bg-blue-700 text-white py-2 px-[26px] rounded-full xl:text-xl">
						Log In
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
