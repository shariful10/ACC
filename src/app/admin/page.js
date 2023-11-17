import Image from "next/image";
import edit from "@/images/edit.svg";
import img from "@/images/slider1.png";
import trast from "@/images/delete.svg";
import { overview } from "@/constants/data";

const Dashboard = () => {
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
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full rounded overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F]  text-left text-sm uppercase font-medium"
									>
										Image
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F]  text-left text-sm uppercase font-medium"
									>
										Head Text
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F] text-left text-sm uppercase font-medium"
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="px-5 py-5 text-sm">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<div className="block relative">
													<Image
														src={img}
														className="mx-auto object-cover h-14 w-16 md:w-[211px] md:h-[91.758px] rounded-[10px]"
														alt=""
													/>
												</div>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 text-sm">
										<p className="md:p md:font-bold mb-5 sm:mb-0">
											WELCOME TO THE WORLD OF ACC
										</p>
										<span className="md:text-lg">
											Upload Date: February 24, 2023
										</span>
									</td>
									<td className="px-5 py-5 text-sm">
										<div className="flex items-center">
											<Image
												src={edit}
												className="mr-5"
												alt="edit"
											/>
											<Image src={trast} alt="delete" />
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="px-5 md:px-[38px] py-[45px] bg-[#F3F3F6] rounded-[30px] mt-[30px]">
				<div className="flex justify-between items-center">
					<h4 className="text-[24px] md:text-[36px] font-bold">Product</h4>
					<button className="px-5 md:px-[30px] py-3 text-xl font-semibold text-white bg-[#2F7CE3] rounded-[10px]">
						Add New
					</button>
				</div>
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full rounded overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F]  text-left text-sm uppercase font-medium"
									>
										Image
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F]  text-left text-sm uppercase font-medium"
									>
										Product Name
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F] text-left text-sm uppercase font-medium"
									>
										Price
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-[#050C2F] text-left text-sm uppercase font-medium"
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{overview.map((item) => (
									<tr key={item.id}>
										<td className="px-5 py-5 border-b border-[#050C2F] text-sm">
											<div className="flex items-center">
												<div className="flex-shrink-0">
													<div className="block relative bg-white rounded-[10px]">
														<Image
															src={item.Image_Url}
															alt="profile"
															className="mx-auto object-cover rounded h-14 w-16"
														/>
													</div>
												</div>
											</div>
										</td>
										<td className="px-5 py-5 border-b border-[#050C2F] text-sm">
											<p className="text-black whitespace-no-wrap mb-5 sm:mb-0">
												{item.name}
											</p>
											<p className="text-black whitespace-no-wrap">
                                 {item.desc}
											</p>
										</td>
										<td className="px-5 py-5 border-b border-[#050C2F] text-sm">
											<p className="text-black whitespace-no-wrap">
                                 ${item.price}
											</p>
										</td>
										<td className="px-5 py-5 border-b border-[#050C2F] text-sm">
											<div className="flex items-center">
												<Image
													src={edit}
													className="mr-5"
													alt="edit"
												/>
												<Image src={trast} alt="delete" />
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
