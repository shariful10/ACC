"use client"
import { AiFillSchedule, AiOutlineBars } from "react-icons/ai";
import { FaGear, FaUserGroup } from "react-icons/fa6";
import { HiMiniHomeModern } from "react-icons/hi2";
import { ImHome } from "react-icons/im";
import { MdClose, MdManageAccounts, MdMeetingRoom } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { IoLogOut } from 'react-icons/io5';
import logo from "@/images/logo.svg";
import { useState } from "react";

const Sidebar = () => {
   const [isActive, setActive] = useState("false");

   // Sidebar Responsive Handler
  const handleToggle = () => {
   setActive(!isActive);
 };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#6b7cff29] text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Image src={logo} width={20} height={20} className="w-[50%]" alt="Logo" />
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 md:bg-[#6b7cff1d] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-500 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full md:flex py-2 justify-center items-center mx-auto">
              <Image className="w-[50%] -ml-20" src={logo} alt="Logo" />
            </div>
            {/* <div className="flex flex-col items-center mt-6 -mx-2">
              
            </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <ul>
            <li>
                  <Link
                    href="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <HiMiniHomeModern className="w-5 h-5 hover:text-white" />
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