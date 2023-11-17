import React from "react";
import photo from "@/images/photo.svg"
import Image from "next/image";

const AddHeroImage = () => {
	return (
		<div className="bg-white md:px-[37px] mb-[40px]">
			<div className="px-5 md:px-[38px] py-[45px] bg-[#F3F3F6] rounded-[30px]">
				<div className="flex justify-between items-center">
					<h4 className="text-[24px] md:text-[36px] font-bold">
						Hero Image
					</h4>
					<button className="px-5 md:px-[30px] py-3 text-xl font-semibold text-white bg-[#2F7CE3] rounded-[10px]">
						Add New
					</button>
				</div>
            <p className="text-xl mt-5 md:mt-2">Share your product image. Image should be PNG and maximum size 1 Mb</p>
            <div className="border-b border-b-[#050C2F] my-[30px]" />
            <div>
               <button className="bg-[#E4E4E4] rounded-[10px] px-[30px] py-3 flex items-center border border-[#878787]">
                  <Image src={photo} className="mr-[10px]" alt="photo" />
                  Add photo
               </button>
            </div>
			</div>
         <div className="mt-8 mb-12 flex justify-end">
            <button className="px-[18px] py-3 rounded-[10px] text-white bg-[#BD2626] hover:bg-red-800 duration-500">Save & Exit</button>
            <button className="px-[18px] py-3 rounded-[10px] text-white bg-[#878787] hover:bg-gray-600 duration-500 ml-5">Publish</button>
         </div>
		</div>
	);
};

export default AddHeroImage;
