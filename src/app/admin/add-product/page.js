import Image from "next/image";
import React from "react";

const AddProduct = () => {
	return (
		<div className="bg-white md:px-[37px] mb-[40px]">
			<div className="px-5 md:px-[38px] py-[45px] bg-[#F3F3F6] rounded-[30px]">
				<h4 className="text-[24px] md:text-[36px] font-bold">Product is</h4>
				<div className="border-b border-b-[#050C2F] my-[30px]" />
				<div className="flex flex-col md:flex-row md:items-end">
					<div className="flex flex-col">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:ml-5 mt-5 md:mt-0 flex flex-col">
                     <label className="text-sm ml-2">Product Name</label>
                     <input
                        className="rounded-[10px] border border-[#050000] w-full md:w-[416px] px-[22px] focus:outline-none bg-transparent h-[50px] mt-3"
                        type="text"
                        placeholder="Product Name"
                     />
                  </div>
                  <div className="md:ml-5 mt-5 md:mt-0 flex flex-col">
                     <label className="text-sm ml-2">Price</label>
                     <input
                        className="rounded-[10px] border border-[#050000] w-full md:w-[150px] px-[22px] focus:outline-none bg-transparent h-[50px] mt-3"
                        type="text"
                        placeholder="Price"
                     />
                  </div>
               </div>
					<div className="flex flex-col md:flex-row items-center">
                  <div className="md:ml-5 mt-5 flex flex-col">
                     <label className="text-sm ml-2">Short Bio (Max 8 words)</label>
                     <input
                        className="rounded-[10px] border border-[#050000] w-full md:w-[416px] px-[22px] focus:outline-none bg-transparent h-[50px] mt-3"
                        type="text"
                        placeholder="Write Your Bio"
                     />
                  </div>
                  <div className="md:ml-5 mt-5 flex flex-col">
                     <label className="text-sm ml-2">Category</label>
                     <input
                        className="rounded-[10px] border border-[#050000] w-full md:w-[280px] px-[22px] focus:outline-none bg-transparent h-[50px] mt-3"
                        type="text"
                        placeholder="Category"
                     />
                  </div>
               </div>
               </div>
				</div>
			</div>
			<div className="mt-8 mb-12 flex justify-end">
				<button className="px-[18px] py-3 rounded-[10px] text-white bg-[#BD2626] hover:bg-red-800 duration-500">
					Save & Exit
				</button>
				<button className="px-[18px] py-3 rounded-[10px] text-white bg-[#878787] hover:bg-gray-600 duration-500 ml-5">
					Publish
				</button>
			</div>
		</div>
	);
};

export default AddProduct;
