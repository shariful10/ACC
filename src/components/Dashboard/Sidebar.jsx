"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/images/logo.svg";
import { MdClose } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import menu from "@/images/menu.svg";

const Sidebar = () => {
	const [active, setActive] = useState("admin");
	const [isActive, setIsActive] = useState("false");

	// Sidebar Responsive Handler
	const handleToggle = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			{/* Small Screen Navbar */}
			<div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
				<div>
					<div className="block cursor-pointer p-4 font-bold">
						<Image
							src={logo}
							width={20}
							height={20}
							className="w-[50%]"
							alt="Logo"
						/>
					</div>
				</div>

				<button
					onClick={handleToggle}
					className="mobile-menu-button p-4 focus:outline-none focus:bg-[#6b7cff04]"
				>
					{!isActive ? (
						<MdClose className="h-5 w-5" />
					) : (
						<AiOutlineBars className="h-5 w-5" />
					)}
				</button>
			</div>
			{/* Sidebar */}
			<div
				className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 md:bg-[#6b7cff1d] w-64 space-y-6 py-4 absolute inset-y-0 left-0 transform ${
					isActive && "-translate-x-full"
				}  md:translate-x-0 transition duration-500 ease-in-out shadow`}
			>
				<div>
					{/* Branding & Profile Info */}
					<div>
						<div className="w-full md:flex pt-2 pb-[11px] justify-center items-center mx-auto md:border-b border-b-[#050C2F]">
							<Link href={"/"}>
								<Image
									className="w-[100px] md:w-[160px] ml-[30px] md:-ml-10"
									src={logo}
									alt="Logo"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between flex-1 mt-6 mx-[30px]">
					<nav>
						<ul>
							<li>
								<Link
									onClick={() => setActive("admin")}
									href={"/admin"}
									className={`${
										active === "admin" && "bg-[#CCDBF2]"
									} flex items-center py-4 px-[10px] rounded-[10px]`}
								>
									<Image src={menu} alt="menu" />
									<span className="mx-4 font-medium">Dashboard</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
