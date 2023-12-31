import React from 'react'
import Image from "next/image"
import left from "@/images/left.png"
import right from "@/images/right.png"
import { FaUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div className='hidden px-[60px] md:flex items-center justify-between pt-[20px] pb-[18px] border-b border-b-[#050C2F]'>
      <div className="flex items-center">
         <div className='flex items-center'>
            <Image src={left} alt="left" className="w-[80%] lg:w-full" />
            <Image src={right} className="ml-5 w-[80%] lg:w-full" alt="right" />
         </div>
         <p className="p ml-5">Dashboard/Overview</p>
      </div>
      <div className='flex items-center'>
         <FaUserCircle className="w-10 h-10 lg:w-12 lg:h-12"  />
         <div className="ml-3">
            <p className="text-lg">Admin Login</p>
            <p className="text-sm">Developer</p>
         </div>
      </div>
    </div>
  )
}

export default DashboardNavbar