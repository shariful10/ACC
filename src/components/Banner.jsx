"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Banner = () => {
	return (
		<div className="container mt-[47px] mb-[100px]">
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide className="sliderBg sliderDesign rounded-[50px]">
               <div className="bg-[#0000003e] px-5 py-10 md:px-[250px] 2xl:px-[333.5px] md:pt-[146px] md:pb-[158px] rounded-[50px] text-center font-black text-white text-[30px] md:text-[50px] 2xl:text-[64.668px]">
                  <h1 className="">BRIGHTEN YOUR <br /> LIFE UHD TV</h1>
               </div>
            </SwiperSlide>
				<SwiperSlide className="sliderBg3 sliderDesign rounded-[50px]">
               <div className="bg-[#00000059] px-5 py-10 md:px-[250px] 2xl:px-[333.5px] md:pt-[146px] md:pb-[158px] rounded-[50px] text-center font-black text-white text-[30px] md:text-[50px] 2xl:text-[64.668px]">
                  <h1 className="">AMAZING DEAL <br /> ON FRIDGES</h1>
               </div>
            </SwiperSlide>
				<SwiperSlide className="sliderBg4 sliderDesign rounded-[50px]">
               <div className="bg-[#0000005e] px-5 py-10 md:px-[250px] 2xl:px-[333.5px] md:pt-[146px] md:pb-[158px] rounded-[50px] text-center font-black text-white text-[30px] md:text-[50px] 2xl:text-[64.668px]">
                  <h1 className="">EASY LAUNDRY <br /> EVERY TIME</h1>
               </div>
            </SwiperSlide>
				<SwiperSlide className="sliderBg2 sliderDesign rounded-[50px]">
               <div className="bg-[#0000005c] px-5 py-10 md:px-[250px] 2xl:px-[333.5px] md:pt-[146px] md:pb-[158px] rounded-[50px] text-center font-black text-white text-[30px] md:text-[50px] 2xl:text-[64.668px]">
                  <h1 className="">BRIGHTEN YOUR <br /> LIFE UHD TV</h1>
               </div>
            </SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
